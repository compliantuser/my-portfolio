const fs = require("node:fs");
const path = require("node:path");

const target = path.join(__dirname, "..", "node_modules", "rollup", "dist", "native.js");

if (!fs.existsSync(target)) {
  console.log("Rollup native loader not found, skipping patch.");
  process.exit(0);
}

const source = fs.readFileSync(target, "utf8");
const marker = "const fallback = require('@rollup/wasm-node/dist/native.js');";

if (source.includes(marker)) {
  console.log("Rollup WASM fallback patch already applied.");
  process.exit(0);
}

const search = "throw new Error(\n\t\t\t`Cannot find module ${id}. ` +";
const replacement = `const fallback = require('@rollup/wasm-node/dist/native.js');\n\t\tif (fallback?.parse && fallback?.parseAsync) {\n\t\t\treturn fallback;\n\t\t}\n\n\t\tthrow new Error(\n\t\t\t\`Cannot find module \${id}. \` +`;

if (!source.includes(search)) {
  console.error("Expected Rollup loader block not found.");
  process.exit(1);
}

fs.writeFileSync(target, source.replace(search, replacement));
console.log("Applied Rollup WASM fallback patch.");
