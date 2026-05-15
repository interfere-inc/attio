#!/usr/bin/env node
/**
 * Reorder package.json exports so the `types` condition comes before
 * `source` in every conditional export object.
 *
 * Speakeasy generates exports with `source` first, which breaks
 * downstream TypeScript projects that opt into
 * `customConditions: ["source"]` for monorepo dev — TypeScript walks
 * conditions in JSON source order, hits `source`, follows it to
 * `./src/*.ts`, and type-checks those source files. The generated
 * source uses plain `import { Foo }` for type-only imports (not
 * `verbatimModuleSyntax`-compliant) so any consumer with that tsconfig
 * flag on fails to typecheck.
 *
 * With `types` first, TypeScript matches `types` → `./esm/*.d.ts`
 * (which is verbatim-compliant). Bun-runtime consumers that pass
 * `--conditions source` still get the source path because `types` is
 * not in their active condition set, and `default` consumers are
 * unaffected.
 *
 * Wired into Speakeasy's lifecycle via `additionalScripts.prepublishOnly`
 * in `.speakeasy/gen.yaml` so the reordered package.json is what gets
 * packed and published.
 */
import { readFileSync, writeFileSync } from "node:fs";

const PKG_PATH = "./package.json";

const reorder = (value) => {
  if (Array.isArray(value)) return value.map(reorder);
  if (value === null || typeof value !== "object") return value;

  const recursed = {};
  for (const [k, v] of Object.entries(value)) {
    recursed[k] = reorder(v);
  }
  if ("source" in recursed && "types" in recursed) {
    const { types, source, ...rest } = recursed;
    return { types, source, ...rest };
  }
  return recursed;
};

const original = readFileSync(PKG_PATH, "utf8");
const pkg = JSON.parse(original);

if (!pkg.exports) {
  console.log("[reorder-exports] no exports field; nothing to do");
  process.exit(0);
}

const before = JSON.stringify(pkg.exports);
pkg.exports = reorder(pkg.exports);
const after = JSON.stringify(pkg.exports);

if (before === after) {
  console.log("[reorder-exports] exports already in canonical order");
  process.exit(0);
}

writeFileSync(PKG_PATH, `${JSON.stringify(pkg, null, 2)}\n`);
console.log(
  "[reorder-exports] reordered exports so `types` precedes `source`"
);
