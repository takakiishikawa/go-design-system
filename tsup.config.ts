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
  ],
  treeshake: true,
});
