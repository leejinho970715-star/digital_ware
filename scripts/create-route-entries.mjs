import { readFile, writeFile, mkdir } from "node:fs/promises";
const html = await readFile("out/index.html", "utf8");
for (const route of [
  "si-customizing",
  "migration",
  "pms",
  "about",
  "government-notice",
  "government-notice/1",
  "government-notice/2",
  "government-notice/3",
  "government-notice/4",
  "government-notice/5",
  "inquiry",
  "business-inquiry",
  "customer-as",
  "location",
  "login",
  "signup",
  "mypage",
]) {
  await mkdir(`out/${route}`, { recursive: true });
  await writeFile(`out/${route}/index.html`, html);
}
await writeFile("out/404.html", html);
await writeFile("out/.nojekyll", "");
