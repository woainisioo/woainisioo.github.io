// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// 部署前请改成你的线上地址（用于 sitemap、RSS、canonical 等）
	// 推荐 GitHub Pages： https://<你的GitHub用户名>.github.io/
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
});
