import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { deleteBlog, getBlogs } from "../utils";

const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs)
    }, [])

    const handleDelete = id => {
        deleteBlog(id);
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    }
    return (
        <div className="px-10 pt-12 grid justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {
                blogs.map(blog => <BlogCard
                    key={blog.id}
                    blog={blog}
                    deletable={true}
                    handleDelete={handleDelete}
                ></BlogCard>)
            }
        </div>
    );
};

export default Bookmarks;