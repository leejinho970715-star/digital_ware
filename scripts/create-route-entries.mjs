import { readFile, writeFile, mkdir } from "node:fs/promises";
const html = await readFile("out/index.html", "utf8");
for (const route of ["si-customizing", "migration", "pms", "about"]) {
  await mkdir(`out/${route}`, { recursive: true });
  await writeFile(`out/${route}/index.html`, html);
}
await writeFile("out/404.html", html);
await writeFile("out/.nojekyll", "");
