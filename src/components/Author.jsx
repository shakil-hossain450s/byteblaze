import { useLoaderData } from "react-router-dom";

const Author = () => {
    const { user: {name, profile_image_90} } = useLoaderData();
    console.log()
    return (
        <div>
            <h2></h2>
        </div>
    );
};

export default Author;