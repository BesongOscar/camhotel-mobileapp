const fs = require("fs");
const path = require("path");
const glob = require("glob");

const root = path.resolve(__dirname, "..");
const localeFiles = {
  en: path.join(root, "locales", "en.ts"),
  fr: path.join(root, "locales", "fr.ts"),
};

function readFile(p) {
  return fs.existsSync(p) ? fs.readFileSync(p, "utf8") : "";
}
const locales = { en: readFile(localeFiles.en), fr: readFile(localeFiles.fr) };

const files = glob.sync(root + "/**/*.{tsx,ts}", {
  ignore: ["**/node_modules/**", "**/build/**"],
});
const keyRegex = /i18n\.t\(\s*"([^"]+)"\s*\)/g;
const usedKeys = new Set();
for (const f of files) {
  const content = fs.readFileSync(f, "utf8");
  let m;
  while ((m = keyRegex.exec(content)) !== null) usedKeys.add(m[1]);
}

function checkKeyInLocale(key, localeText) {
  if (!key.includes(".")) {
    return localeText.includes(key + ":");
  }
  const [top, prop] = key.split(".", 2);
  const re = new RegExp(
    top.replace(/[-\\/\\^$*+?.()|[\]{}]/g, "\\$&") +
      "\\s*:\\s*{[\\s\\S]*?" +
      prop.replace(/[-\\/\\^$*+?.()|[\]{}]/g, "\\$&") +
      "\\s*:",
    "m",
  );
  return re.test(localeText);
}

const missing = { en: [], fr: [] };
for (const k of [...usedKeys].sort()) {
  if (!checkKeyInLocale(k, locales.en)) missing.en.push(k);
  if (!checkKeyInLocale(k, locales.fr)) missing.fr.push(k);
}

console.log("Checked", usedKeys.size, "keys");
console.log("\nMissing in en:");
if (missing.en.length === 0) console.log("  (none)");
else missing.en.forEach((k) => console.log("  ", k));
console.log("\nMissing in fr:");
if (missing.fr.length === 0) console.log("  (none)");
else missing.fr.forEach((k) => console.log("  ", k));

if (missing.en.length === 0 && missing.fr.length === 0) process.exit(0);
process.exit(2);
