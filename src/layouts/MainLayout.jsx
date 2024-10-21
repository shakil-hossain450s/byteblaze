import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const MainLayout = () => {
    const navigation = useNavigation();
    return (
        <div>
            <div className="h-16">
                <Navbar />
            </div>
            <div className="min-h-[calc(100vh-116px)]">
                {
                    navigation.state === "loading"
                        ? <Loader />
                        : <Outlet />
                }
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;