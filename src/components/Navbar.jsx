import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../layouts/Button";
import { AiOutlineMenu } from "react-icons/ai";
import LoadingBar from "react-top-loading-bar";
import { useAuth } from "../components/AuthContext"; // Importing useAuth from AuthContext
import { Avatar} from "@material-tailwind/react"; // Importing Avatar component from material-tailwind

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const ref = useRef(null);
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useAuth(); // Getting authentication state and logout function from AuthContext

    const handleChange = () => {
        setMenu(!menu);
    };

    const handleLinkClick = (path) => {
        ref.current.continuousStart(); // Start the loading bar
        setTimeout(() => {
            ref.current.complete(); // Complete the loading bar after 500 milliseconds
            navigate(path); // Navigate to the desired route
        }, 500); // 500 milliseconds delay
    };

    const handleLogout = () => {
        logout(); // Call the logout function from AuthContext
    };
   

    const backgroundColor = `bg-white`;

    return (
        <div>
            <LoadingBar color="red" ref={ref} />
            <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-darkBackground text-white">
                <div className="flex items-center">
                    <Link to="/" className="font-semibold text-xl cursor-pointer">
                        RoamRise
                    </Link>
                </div>
                <nav className="hidden lg:flex flex-row items-center gap-6">
                    <span
                        onClick={() => handleLinkClick("/home")}
                        className="hover:text-brightColor transition-all cursor-pointer"
                    >
                        Home
                    </span>
                    <span
                        onClick={() => handleLinkClick("/features")}
                        className="hover:text-brightColor transition-all cursor-pointer"
                    >
                        Features
                    </span>
                    <span
                        onClick={() => handleLinkClick("/destination")}
                        className="hover:text-brightColor transition-all cursor-pointer"
                    >
                        Destination
                    </span>
                    <span
                        onClick={() => handleLinkClick("/about")}
                        className="hover:text-brightColor transition-all cursor-pointer"
                    >
                        About
                    </span>
                    <span
                        onClick={() => handleLinkClick("/contact")}
                        className="hover:text-brightColor transition-all cursor-pointer"
                    >
                        Contact
                    </span>
                </nav>

                <div
                    className={`${
                        menu ? "translate-x-0" : "-translate-x-full"
                    } lg:hidden flex flex-col absolute bg-darkBackground text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
                >
                    <span
                        onClick={() => handleLinkClick("/home")}
                        className="hover:text-brightColor transition-all cursor-pointer"
                    >
                        Home
                    </span>
                    <span
                        onClick={() => handleLinkClick("/features")}
                        className="hover:text-brightColor transition-all cursor-pointer"
                    >
                        Features
                    </span>
                    <span
                        onClick={() => handleLinkClick("/destination")}
                        className="hover:text-brightColor transition-all cursor-pointer"
                    >
                        Destination
                    </span>
                    <span
                        onClick={() => handleLinkClick("/about")}
                        className="hover:text-brightColor transition-all cursor-pointer"
                    >
                        About
                    </span>
                    <span
                        onClick={() => handleLinkClick("/contact")}
                        className="hover:text-brightColor transition-all cursor-pointer"
                    >
                        Contact
                    </span>
                </div>

                <div className="hidden lg:flex flex-row items-center gap-4">
                    {isAuthenticated && (
                        <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar"
                        className="w-10 h-10 rounded-full"  
                        />
                    )}
                </div>

                <div className="lg:hidden flex items-center p-2" onClick={handleChange}>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;
