import { globby } from "globby";
import matter from "gray-matter";
import fs from "fs-extra";
import path from "path";

// 直接读取文章，绕过 utils.js 中 getPostMDFilePaths 的 Windows 路径 bug
const postsDir = path.resolve(process.cwd(), "src/posts");
const relPostsDir = path.relative(process.cwd(), postsDir).split(path.sep).join("/");
const mdPaths = await globby([`${relPostsDir}/**/*.md`], {
    ignore: ["node_modules", "pages", ".vitepress", "README.md"]
});

const postData = await Promise.all(
    mdPaths.map(async (item) => {
        const content = await fs.readFile(item, "utf-8");
        const { data } = matter(content);
        return { categories: data.categories || [] };
    })
);

// 提取所有分类
const catData = {};
postData.forEach((item) => {
    if (!item.categories || item.categories.length === 0) return;
    const categories = typeof item.categories === "string" ? item.categories.split(",") : item.categories;
    categories.forEach((cat) => {
        catData[cat] = true;
    });
});

export default {
    paths() {
        return Object.keys(catData).map((key) => ({
            params: { name: key.toString() }
        }));
    },
};
