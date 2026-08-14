// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// GitHub Pages 部署说明：
// - 本仓库是组织主页仓库（tortotech.github.io），站点直接部署在根路径
// - 若迁移到其他仓库/域名，修改 SITE_URL 与 BASE_PATH（或同名环境变量）
const site = process.env.SITE_URL ?? 'https://tortotech.github.io';
const base = process.env.BASE_PATH ?? '/';

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
            {
              label: '专注模式',
              translations: { en: 'Focus Mode' },
              slug: 'guides/focus-mode',
            },
          ],
        },
      ],
      customCss: ['./src/styles/starlight.css'],
    }),
  ],
});
