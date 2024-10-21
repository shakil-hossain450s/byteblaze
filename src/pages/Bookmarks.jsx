import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { deleteBlog, getBlogs } from "../utils";
import { Link } from "react-router-dom";

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
        <>
            {
                blogs.length < 1
                    ? <div className="h-[calc(100vh-116px)] flex flex-col justify-center items-center">
                        <h2 className="text-3xl opacity-80">No Bookmarks Found</h2>
                        <Link to="/blogs" className="mt-5 relative inline-block px-4 py-2 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                            <span className="relative text-black group-hover:text-white">Browse Blogs</span>
                        </Link>
                    </div>
                    : <div className="px-10 pt-12 grid justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            blogs.map(blog => <BlogCard
                                key={blog.id}
                                blog={blog}
                                deletable={true}
                                handleDelete={handleDelete}
                            ></BlogCard>)
                        }
                    </div>
            }
        </>
    );
};

export default Bookmarks;