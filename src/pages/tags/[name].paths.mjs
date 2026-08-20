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
        return { tags: data.tags || [] };
    })
);

// 提取所有标签
const tagData = {};
postData.forEach((item) => {
    if (!item.tags || item.tags.length === 0) return;
    const tags = typeof item.tags === "string" ? item.tags.split(",") : item.tags;
    tags.forEach((tag) => {
        tagData[tag] = true;
    });
});

export default {
    paths() {
        return Object.keys(tagData).map((key) => ({
            params: { name: key.toString() }
        }));
    },
};
