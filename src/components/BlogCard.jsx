import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import placeHolder from "../assets/404.jpg"

const BlogCard = ({ blog }) => {
    const { id, title, cover_image, description, published_at } = blog;
    return (
        <Link
            to={`/blog/${id}`}
            rel="noopener noreferrer" className="max-w-sm transition border-2 border-primary p-2 rounded hover:border-secondary hover:scale-105 border-opacity-30 mx-auto group hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50 hidden sm:block">
            <img role="presentation" className="object-cover mb-4 w-full rounded h-44 bg-gray-500 dark:bg-gray-500" src={cover_image ? cover_image : placeHolder} />
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <span className="text-xs text-gray-400 dark:text-gray-600">{new Date(published_at).toDateString()}</span>
                <p>{description}</p>
            </div>
        </Link>
    );
};

BlogCard.propTypes = {
    blog: PropTypes.object
}

export default BlogCard;