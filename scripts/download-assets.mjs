import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { dirname } from "node:path";
const assets = Object.values(
  JSON.parse(await readFile(".design-reference/assets.json", "utf8")),
);
let next = 0;
await Promise.all(
  Array.from({ length: 6 }, async () => {
    while (next < assets.length) {
      const { url, path } = assets[next++];
      try {
        if ((await stat(path)).size > 0) continue;
      } catch {}
      const response = await fetch(url);
      if (!response.ok) throw new Error(`${response.status}: ${path}`);
      await mkdir(dirname(path), { recursive: true });
      await writeFile(path, Buffer.from(await response.arrayBuffer()));
      console.log(path);
    }
  }),
);
