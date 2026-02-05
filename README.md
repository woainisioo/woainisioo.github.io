# 个人博客（简约风）

技术栈：**Astro + Markdown**（纯静态站点）

## 主要功能

- 文章列表 / 文章详情
- Markdown/MDX 写作
- 标签页（/tags）
- 站内搜索（/search，纯前端）
- RSS（/rss.xml）
- Sitemap（/sitemap-index.xml）
- 适合部署到 GitHub Pages / Cloudflare Pages（免费 + HTTPS）

## 本地预览

```bash
cd personal-blog
npm install
npm run dev
```

打开：<http://localhost:4321>

## 写文章

在 `src/content/blog/` 新建 `*.md`：

```md
---
title: '文章标题'
description: '一句话摘要'
pubDate: '2026-02-05'
tags: ['随笔', '技术']
---

正文...
```

## 部署到 GitHub Pages（推荐：免费 + 安全 + 稳定）

### 方案 A（最省事）：用户/组织主页

1. 在 GitHub 新建仓库：`<你的GitHub用户名>.github.io`（必须是这个名字）
2. 把本项目推到该仓库（main 分支）
3. 在仓库 Settings → Pages：
   - Build and deployment 选择 **GitHub Actions**
4. 等 Actions 跑完，网站会出现在：
   - `https://<你的GitHub用户名>.github.io/`
5. **重要：**修改 `astro.config.mjs` 里的 `site` 为你的真实地址

### 方案 B：项目页（URL 带 /repo）

也可以部署到 `https://<user>.github.io/<repo>/`，但需要额外配置 `base` 路径。
如果你要用这个方案，告诉我你的 repo 名字，我把配置补齐。

## 安全性说明

- 纯静态站点：没有数据库、没有后端登录面，攻击面很小
- GitHub Pages/Cloudflare Pages 默认提供 HTTPS

---

如果你把以下信息给我，我可以把站点文案/站点名/配色一次性改好，并给你生成可直接发布的版本：
- 博客名称
- 个人简介（about 页面）
- GitHub 用户名（用于 Pages 地址）
- 是否需要自定义域名（可选）
