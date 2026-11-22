import { readFile, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const apps = ['flip', 'porthole', 'tessera', 'launchpad', 'bubble', 'crate'];
for (const slug of apps) {
  for (const doc of ['privacy', 'terms']) {
    const dir = join('dist', 'apps', slug, `${doc}.html`);
    const source = join(dir, 'index.html');
    const target = join('dist', 'apps', slug, `${doc}.html`);
    const html = await readFile(source, 'utf8');
    await rm(dir, { recursive: true, force: true });
    await writeFile(target, html);
  }
}
