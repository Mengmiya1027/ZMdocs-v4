// .vitepress/themeConfig.ts
import { defineThemeConfig } from 'vitepress-theme-ninc/defineThemeConfig'

export const themeConfig = defineThemeConfig({
    // 站点基本信息
    // @ts-ignore
    siteMeta: {
        title: 'ZMdocs', // ← 改成你的博客名
        description: 'Make you feel mysterious.', // ← 改成你的博客描述
        site: 'https://zmdocs-v4.pages.dev', // ← 改成你的域名（没有就先写这个）
        avatar: '/images/personal/avatar-zm.jpg', // ← 头像路径（可以先留空）
        logo: '/images/basic/logo-high.webp',
        author: {
            name: '稚梦沈星河',
            cover: '/images/personal/avatar-zm.jpg',
            email: '1176537786@qq.com',
            link: 'https://github.com/SB5133'
        },
        lang: "zh-CN"
    },
    // @ts-ignore
    aside: {
        hello: {
            enable: true,
            text: '<strong style="display: block;width: fit-content;margin: 0 auto;">你好！</strong>这里是ZMdocs的V4版本，记录着两位开发者的一些随笔……' +
                '<div class="hello-image-wrapper"><img alt="加载不出来还看个🥚……" src="/images/banner/banner-zm.jpg" class="hello-image"></div>'
        }
    },
    // @ts-ignore
    homeTop: {
        title: 'ZMdocs',
        subtitle: '赴远山，观星海',
        link: 'zmdocs-v4.pages.dev',
        banner: {
            tip: '来看看：',
            title: 'ZhiMengParser',
            image: '/images/wiki/mysterious/12.png',
            recommendUrl: 'https://github.com/SB5133/astrbot_plugin_ZhiMengParser',
            newTab: true
        },
        category: [
            { name: '归档', path: '/pages/archives', shadow: 'var(--main-shadow-blue)', icon: 'icon-article', class: 'blue' },
            { name: '分类', path: '/pages/categories', shadow: 'var(--main-shadow-red)', icon: 'icon-folder', class: 'red' },
            { name: 'NES模拟', path: '/pages/nes', shadow: 'var(--main-shadow-purple)', icon: 'icon-game', class: 'purple' },
            { name: '留言板', path: '/pages/comments', shadow: 'var(--main-shadow-blue)', icon: 'icon-chat', class: 'green' }
        ],
    },
    nav: [
        {
            text: '文库',
            items: [
                { text: '文章列表', link: '/pages/archives', icon: 'article' },
                { text: '全部分类', link: '/pages/categories', icon: 'folder' },
                { text: '全部标签', link: '/pages/tags', icon: 'hashtag' }
            ]
        },
        {
            text: '我的',
            items: [
                { text: '留言板', link: '/pages/comments', icon: 'chat' },
                { text: '关于本站', link: '/pages/about', icon: 'contacts' }
            ]
        },
        {
            text: '工具',
            items: [
                { text: '在线工具集', link: '/pages/tools', icon: 'tool' },
                { text: '友情链接', link: '/pages/friends', icon: 'link' }
            ]
        }
    ],
    navMore: [
        {
            name: '主页',
            list: [
                { icon: '/images/personal/avatar-zm.jpg', iconType: 'img', name: '稚梦沈星河', url: 'https://github.com/SB5133', target: '_blank' },
                { icon: '/images/personal/avatar-mmy.jpg', iconType: 'img', name: '愿Wish', url: 'https://github.com/Mengmiya1027', target: '_blank' }
            ]
        },
        {
            name: '社交',
            list: [
                { icon: 'github', iconType: 'iconfont', name: 'GitHub', url: 'https://github.com/Mengmiya1027/ZMdocs-v4', target: '_blank' },
                { icon: 'bilibili', iconType: 'iconfont', name: 'Bilibili', url: 'https://space.bilibili.com/3493129869068953', target: '_blank' },
                { icon: 'email', iconType: 'iconfont', name: '邮箱', url: 'mailto:you@example.com' },
                { icon: '/images/icons/simple-icons--kuaishou.svg', iconType: 'img', name: '快手', url: 'https://live.kuaishou.com/profile/kill-Q-123' }
            ]
        },
        {
            name: '链接',
            list: [
                { icon: 'github', iconType: 'iconfont', name: '文档仓库', url: 'https://github.com/Mengmiya1027/ZMdocs-v4', target: '_blank' },
                { icon: '/images/icons/bxl--qq.svg', iconType: 'img', name: '人机工程局', url: 'https://qm.qq.com/q/Drdh1lFYje', target: '_blank' }
            ]
        }
    ],
    // 站点统计
    tongji: {
        '51la': '3QwAY6dUpg6lP5Gk'
    },
    about: {
        // 头像两侧技能标签
        avatarSkills: {
            left: ['💻', '🚀', '🛠️', '📚'],
            right: ['🤫', '✨', '🤔', '🔍']
        },
        // 介绍区域
        hello: {
            text1: '你好，很高兴认识你👋',
            text2: 'console.log(" Hello, I\'m ZM. ");',
            text3: '是一名  严肃/神秘/幽默/感性  的  神人'
        },
        // 追求区域（word 数组会循环轮播显示）
        pursuit: {
            tips: '神秘的信仰（什么逆天模板',
            title1: '用创造力与代码',
            title2: '去构建心中的那一片',
            word: ['未来', '神秘', '愿景', '哈气的基米']
        },
        // 技能区域（技能图标数据来自 homeTop.creativity）
        skills: { tip: '来来来让我装一装', title: '技能（展示实力ing~）' },
        // 性格区域（mbtiIcon 为 SVG 图标路径，缺失时不显示）
        character: {
            tip: '性格',
            title: '调停者',
            mbti: 'INFP-T',
            mbtiIcon: 'https://www.16personalities.com/static/images/profile/reports/mediator/profile_scene_mediator_personality_traits_neutral_male.svg',
            desc: '我还是爷们！',
            linkText: ''
        },
        // 座右铭
        motto: { tip: '座右铭', title1: '随意写，', title2: '随意看。' },
        // 关注偏好（image 为背景图路径，color 为叠加色）
        preference: {
            image: '/images/personal/preference.webp',
            color: '#00000022',
            tip: '关注偏好',
            title: '数码科技',
            desc: '手机、电脑及软硬件'
        },
        // 音乐偏好
        musicPreference: {
            image: '/images/personal/music-preference.jpg',
            color: '#ffffff22',
            tip: 'Music🎵',
            title: 'Charlie',
            desc: '风雨同周，深情不移'
        },
        // 数据统计（配合 tongji.busuanzi 使用）
        statistics: {
            color: '#0f1114',
            image: '/images/ui/bg-2-dark.png',
            tip: '数据',
            title: '访问统计',
            desc: '统计信息来自',
            source: '不蒜子',
            sourceLink: 'http://busuanzi.ibruce.info/'
        },
        // 信息区域（mapImage 为地图图片，address 为居住地址，items 为信息项）
        info: {
            mapImage: '/images/personal/address.png',
            address: '四川省 宜宾市',
            items: [
                { name: '生于', value: '7891', color: '#43a6c6' },
                { name: '现在职业', value: '神人哈基米', color: '#dfac46' }
            ]
        }
    }
})