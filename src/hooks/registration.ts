import { env } from "../lib/env.js";
import {
  AfterErrorContext,
  AfterErrorHook,
  AfterSuccessContext,
  AfterSuccessHook,
  BeforeRequestContext,
  BeforeRequestHook,
  Hooks,
} from "./types.js";

/*
 * This file is only ever generated once on the first generation and then is free to be modified.
 * Any hooks you wish to add should be registered in the initHooks function. Feel free to define them
 * in this file or in separate files in the hooks folder.
 */

export function initHooks(hooks: Hooks) {
  if (!env().ATTIO_DEBUG) {
    return;
  }
  const instrumentation = new RequestTimingHook();
  hooks.registerBeforeRequestHook(instrumentation);
  hooks.registerAfterSuccessHook(instrumentation);
  hooks.registerAfterErrorHook(instrumentation);
}

/**
 * Per-attempt timing + status logger for the Attio SDK.
 *
 * Activated by setting `ATTIO_DEBUG=1` (the typed env reader at
 * `src/lib/env.ts` already recognises it). Off by default so consumers
 * who don't opt in see no extra log noise.
 *
 * Why this exists: the homepage on Vercel hit Next.js's 60s
 * static-page generation timeout on three career detail pages with no
 * signal about which Attio call burned the budget — was it one slow
 * request, six retried ones, or the SDK sleeping mid-`retry-after`?
 * These hooks emit one structured line per HTTP attempt so the build
 * log answers that question.
 *
 * Emitted shapes:
 *   [attio] op=<operationID> phase=start url=<url>
 *   [attio] op=<operationID> phase=success ms=<duration> status=<code>
 *   [attio] op=<operationID> phase=error ms=<duration> status=<code> retry_after=<sec> error=<name>
 *
 * `retry_after` only appears when the response carries the header
 * (typically on 429s); `error` is the constructor name when no
 * Response was produced (timeouts, network errors). Each retry attempt
 * produces its own start/end pair — count them per `op=` to see how
 * deep the retry loop went before giving up or succeeding.
 *
 * Implementation note: the Speakeasy-generated `HookContext` doesn't
 * carry the `Request` through to `afterSuccess`/`afterError`, so we
 * can't correlate by Request reference. Instead we maintain a FIFO
 * queue of start times keyed by `operationID`. Under interleaved
 * concurrent calls to the same op (uncommon in the build-time path
 * this is aimed at), per-attempt durations may swap pairs, but the
 * aggregate wall-clock budget per op stays exact.
 */
class RequestTimingHook
  implements BeforeRequestHook, AfterSuccessHook, AfterErrorHook
{
  private readonly pending = new Map<string, number[]>();

  beforeRequest(ctx: BeforeRequestContext, request: Request): Request {
    const queue = this.pending.get(ctx.operationID);
    if (queue) {
      queue.push(performance.now());
    } else {
      this.pending.set(ctx.operationID, [performance.now()]);
    }
    console.log(
      `[attio] op=${ctx.operationID} phase=start url=${request.url}`,
    );
    return request;
  }

  afterSuccess(ctx: AfterSuccessContext, response: Response): Response {
    const ms = this.popDuration(ctx.operationID);
    console.log(
      `[attio] op=${ctx.operationID} phase=success ms=${ms} status=${response.status}`,
    );
    return response;
  }

  afterError(
    ctx: AfterErrorContext,
    response: Response | null,
    error: unknown,
  ): { response: Response | null; error: unknown } {
    const ms = this.popDuration(ctx.operationID);
    const status = response?.status ?? 0;
    const retryAfter = response?.headers.get("retry-after") ?? "";
    const errorName = extractErrorName(error);

    const parts = [
      `op=${ctx.operationID}`,
      "phase=error",
      `ms=${ms}`,
      `status=${status}`,
    ];
    if (retryAfter) {
      parts.push(`retry_after=${retryAfter}`);
    }
    if (errorName) {
      parts.push(`error=${errorName}`);
    }
    console.log(`[attio] ${parts.join(" ")}`);

    return { response, error };
  }

  private popDuration(opId: string): string {
    const queue = this.pending.get(opId);
    if (!queue || queue.length === 0) {
      // beforeRequest never ran (or already drained) — return a marker
      // rather than `0` so the log doesn't look like an instant call.
      return "?";
    }
    const start = queue.shift() as number;
    if (queue.length === 0) {
      this.pending.delete(opId);
    }
    return Math.round(performance.now() - start).toString();
  }
}

function extractErrorName(error: unknown): string {
  if (error && typeof error === "object" && "name" in error) {
    const name = (error as { name: unknown }).name;
    if (typeof name === "string") {
      return name;
    }
  }
  if (typeof error === "string") {
    return error;
  }
  return "";
}
