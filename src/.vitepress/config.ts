// .vitepress/config.mts
// @ts-ignore
import { defineConfig } from 'vitepress-theme-ninc/defineConfig'
import { themeConfig } from './themeConfig'
import { loadEnv } from 'vite'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

// 加载 .env.local 等环境变量
const env = loadEnv('development', process.cwd(), '')

// 读取游戏列表 JSON
const __dirname = dirname(fileURLToPath(import.meta.url))
const gamesJson = JSON.parse(readFileSync(resolve(__dirname, '../public/json/games.json'), 'utf-8'))

export default defineConfig(
    // 这里可以覆盖 VitePress 的默认配置
    {
        sitemap: {
            hostname: 'https://zmdocs-v4.pages.dev' // 务必替换为你的真实域名
        }
    },
    // 主题配置（外观、功能等）
    {
        ...themeConfig,
        aiSummary: {
            ...themeConfig.aiSummary,
            apiKey: env.GLM_API_KEY || themeConfig.aiSummary?.apiKey || '',
        },
        nes: {
            roms: gamesJson,
            defaultRomId: gamesJson[0]?.id || '1'
        }
    },
    // 特色配置
    {
        postsDir: 'src/posts',
        postsUrlStrip: 'src',
        svgIconDirs: ['src/public/svg'],
    }
)