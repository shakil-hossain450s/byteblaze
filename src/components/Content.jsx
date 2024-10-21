import { useLoaderData } from "react-router-dom";
import placeHolder from "../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
    const blog = useLoaderData();
    const { body_html, cover_image, title, tags } = blog;
    return (
        <div rel="noopener noreferrer" className=" border-2 border-primary p-2 rounded border-opacity-30 group focus:no-underline hidden sm:block">
            <img role="presentation" className="object-cover mb-4 w-full rounded h-44 bg-gray-500 dark:bg-gray-500" src={cover_image ? cover_image : placeHolder} />
            <div className="my-6">
                {
                    tags.map((tag, idx) => <a key={idx} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline">#{tag}</a>)
                }
            </div>
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <div>
                    <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
                </div>
            </div>
        </div>
    );
};

export default Content;