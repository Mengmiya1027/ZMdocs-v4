import { getAllPosts, getAllCategories } from "vitepress-theme-ninc/utils";

const postData = await getAllPosts();
const categoriesData = getAllCategories(postData);

export default {
    paths() {
        const pages = [];
        Object.keys(categoriesData).forEach((key) => {
            pages.push({ params: { name: key.toString() } });
        });
        return pages;
    },
};