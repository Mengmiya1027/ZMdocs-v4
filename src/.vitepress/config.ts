// .vitepress/config.mts
// @ts-ignore
import { defineConfig } from 'vitepress-theme-ninc/defineConfig'
import { themeConfig } from './themeConfig'
import { loadEnv } from 'vite'

// 加载 .env.local 等环境变量
const env = loadEnv('development', process.cwd(), '')

export default defineConfig(
    // 这里可以覆盖 VitePress 的默认配置
    {},
    // 主题配置（外观、功能等）
    {
        ...themeConfig,
        aiSummary: {
            ...themeConfig.aiSummary,
            apiKey: env.GLM_API_KEY || themeConfig.aiSummary?.apiKey || '',
        }
    },
    // 特色配置
    {
        postsDir: 'src/posts',
        postsUrlStrip: 'src',
        svgIconDirs: ['src/public/svg'],
    }
)