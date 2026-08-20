import { getAllPosts, getAllType } from "vitepress-theme-ninc/utils";

const postData = await getAllPosts();
const tagsData = getAllType(postData);

export default {
    paths() {
        const pages = [];
        Object.keys(tagsData).forEach((key) => {
            pages.push({ params: { name: key.toString() } });
        });
        return pages;
    },
};