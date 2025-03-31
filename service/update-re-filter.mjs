import { writeFile } from "fs/promises"

// URL of the file to download
const FILE_URL =
  "https://github.com/1andrevich/Re-filter-lists/releases/latest/download/domains_all.lst"

try {
  console.log("Downloading new filters...")
  const response = await fetch(FILE_URL)
  if (!response.ok) {
    throw new Error(`Error downloading file: ${response.status}`)
  }
  const text = await response.text()

  console.log("Converting filters...")

  // Split the content into lines and filter out empty ones
  const lines = text.split(/\r?\n/).filter((line) => line.trim() !== "")

  // Transform each line into a Regex literal
  const regexLines = lines.map((line) => `  /${line}$/,`)

  // Compose the final content of the file
  const output = `/**
 * The list of URLs kindly created by Andrevich and the community.
 *
 * https://github.com/1andrevich/Re-filter-lists
 */
export const reFiterUrls: RegExp[] = [
${regexLines.join("\n")}
];
`
  console.log("Saving file...")
  // Write the file to the specified location
  await writeFile("src/urls/re-fiter-urls.ts", output)
  console.log("File successfully created: src/urls/re-fiter-urls.ts")
} catch (error) {
  console.error("Error:", error)
}
