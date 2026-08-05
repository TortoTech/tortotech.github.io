// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// GitHub Pages 部署说明：
// - `site` 改为你的 GitHub Pages 域名，例如 'https://<username>.github.io'
// - `base` 改为仓库名（项目页需要），例如 '/torto-site'；用户/组织主页则删掉 base
// 两者也可通过环境变量覆盖：SITE_URL / BASE_PATH（见 .github/workflows/deploy.yml）
const site = process.env.SITE_URL ?? 'https://tortotech.github.io';
const base = process.env.BASE_PATH ?? '/torto-site';

export default defineConfig({
  site,
  base,
  integrations: [
    starlight({
      title: {
        'zh-CN': 'Torto 小龟阅读',
        en: 'Torto Reader',
      },
      description:
        'A focused, local-first ebook reader for Windows and macOS.',
      logo: {
        src: './public/images/logo.png',
        alt: 'Torto',
      },
      favicon: '/images/logo.png',
      defaultLocale: 'root',
      locales: {
        root: { label: '简体中文', lang: 'zh-CN' },
        en: { label: 'English', lang: 'en' },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/TortoTech/torto',
        },
      ],
      sidebar: [
        {
          label: '指南',
          translations: { en: 'Guides' },
          items: [
            {
              label: 'OCR 服务商配置',
              translations: { en: 'OCR Providers' },
              slug: 'guides/ocr-providers',
            },
            {
              label: '云盘服务商配置',
              translations: { en: 'Cloud Storage Providers' },
              slug: 'guides/cloud-storage',
            },
          ],
        },
      ],
      customCss: ['./src/styles/starlight.css'],
    }),
  ],
});
