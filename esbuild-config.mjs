import * as esbuild from "esbuild"

const BANNER_TEXT = `/**
 * This is an automatically generated file.
 * The source code is available at: https://github.com/ctulhu-vpn/ru-proxy-pac
 */
`

export const esOptions = {
  entryPoints: ["src/pac.ts"],
  bundle: true,
  outfile: "build/proxy.pac",
  target: "es6",
  format: "cjs",
  minifySyntax: true,
  treeShaking: false,
  logLevel: "info",
  banner: {
    js: BANNER_TEXT,
  },
}

await esbuild.build(esOptions)
