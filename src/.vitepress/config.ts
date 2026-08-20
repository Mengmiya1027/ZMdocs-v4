// .vitepress/config.mts
import { defineConfig } from 'vitepress-theme-ninc/defineConfig'
import { themeConfig } from './themeConfig'

export default defineConfig(
    // 这里可以覆盖 VitePress 的默认配置
    {},
    // 主题配置（外观、功能等）
    themeConfig,
    // 特色配置
    {
        postsDir: 'src/posts',
        postsUrlStrip: 'src',
        svgIconDirs: ['src/public/svg'],
    }
)