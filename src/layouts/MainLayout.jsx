import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            <div className="h-[68px]">
                <Navbar />
            </div>
            <Outlet />
        </div>
    );
};

export default MainLayout;