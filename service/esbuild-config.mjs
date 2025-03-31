import * as esbuild from "esbuild"

const BANNER_TEXT = `/**
 * This is an automatically generated file.
 * The source code is available at: https://github.com/ctulhu-vpn/ru-proxy-pac
 */
`

const isTest = process.argv[2] === "test"

export const esOptions = {
  entryPoints: isTest ? ["tests/testURL.ts"] : ["src/pac.ts"],
  bundle: true,
  outfile: "build/proxy.pac",
  target: "es6",
  format: "cjs",
  treeShaking: false,
  logLevel: "info",
  banner: {
    js: BANNER_TEXT,
  },
  // Minify options
  minifyIdentifiers: false,
  minifyWhitespace: true,
  minifySyntax: true,
}

await esbuild.build(esOptions)
