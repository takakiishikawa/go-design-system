import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: [
    "react",
    "react-dom",
    "recharts",
    "lucide-react",
    "react-hook-form",
    "zod",
    "date-fns",
    "@dnd-kit/core",
    "@dnd-kit/sortable",
    "@dnd-kit/utilities",
    "react-dropzone",
  ],
  treeshake: true,
  onSuccess: "node -e \"const fs=require('fs');fs.mkdirSync('dist/styles',{recursive:true});fs.copyFileSync('src/styles/tokens.css','dist/styles/tokens.css');fs.copyFileSync('src/styles/globals.css','dist/styles/globals.css');['dist/index.mjs','dist/index.js'].forEach(f=>{const c=fs.readFileSync(f,'utf8');if(!c.startsWith('\\\"use client\\\";'))fs.writeFileSync(f,'\\\"use client\\\";\\n'+c)});console.log('CSS files copied and use client directive added')\"",
});
