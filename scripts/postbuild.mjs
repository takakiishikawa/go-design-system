import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from "fs"

// Copy CSS files to dist/styles/
mkdirSync("dist/styles", { recursive: true })
copyFileSync("src/styles/tokens.css", "dist/styles/tokens.css")
copyFileSync("src/styles/globals.css", "dist/styles/globals.css")
copyFileSync("src/styles/theme.css", "dist/styles/theme.css")
console.log("CSS files copied to dist/styles/")

// Prepend "use client" to JS bundles
for (const file of ["dist/index.mjs", "dist/index.js"]) {
  const content = readFileSync(file, "utf8")
  if (!content.startsWith('"use client";')) {
    writeFileSync(file, '"use client";\n' + content)
    console.log(`Added "use client" directive to ${file}`)
  }
}
