import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";

const RootLayout = () => {
    return (
        <div>
            <NavBar />
            {/* Dynamic */}
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default RootLayout;