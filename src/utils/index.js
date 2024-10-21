import toast from "react-hot-toast";

const getBlogs = () => {
    let blogs = [];
    const savedBlogs = localStorage.getItem("blogs");
    if (savedBlogs) {
        blogs = JSON.parse(savedBlogs);
    }
    return blogs;
}

// save blog to the localStorage
const saveBlog = blog => {
    const blogs = getBlogs();
    const isExist = blogs.find(b => b.id === blog.id);
    if(isExist){
        return toast.error("Blog already exits in Bookmark!!!")
    }
    blogs.push(blog);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    toast.success("Successfully bookmarked the blog");
}

// delete blog form localStorage and set remaining blogs
const deleteBlog = id => {
    const blogs = getBlogs();
    const remainingBlogs = blogs.filter(b => b.id !== id);
    localStorage.setItem("blogs", JSON.stringify(remainingBlogs));
    toast.success("Successfully deleted the bookmark");
}

export { getBlogs, saveBlog, deleteBlog };