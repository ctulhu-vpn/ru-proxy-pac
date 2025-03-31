import http from "http"
import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"
import * as esbuild from "esbuild"
import { esOptions } from "./esbuild-config.mjs"

// Getting the path to the current file and directory
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Specifying the file path
const filePath = path.join(__dirname, "../build", "proxy.pac")
const port = 3032

// Creating an HTTP server
const server = http.createServer(async (_, res) => {
  try {
    const data = await fs.readFile(filePath)
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end(data)
  } catch (err) {
    res.writeHead(500, { "Content-Type": "text/plain" })
    res.end("Internal Server Error")
    console.error(err)
  }
})

// Starting the server
server.listen(port, async () => {
  console.log(`\nServer started at http://localhost:${port}\n`)

  // Watch for files changes
  const esContext = await esbuild.context(esOptions)
  await esContext.watch()
})
