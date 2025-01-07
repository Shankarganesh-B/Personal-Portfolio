import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Header() {

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNav = (path) => {
        navigate(path)
    }

    return (
        <header className="relative">
            <div className="w-screen h-16 bg-red-200 z-20 fixed"> <h1 className="font-serif font-bold text- text-3xl ml-4 m-3">Shankarganesh B</h1></div>
            {/* Hamburger Menu Icon */}
            {!isOpen && (
                <div
                    className="fixed top-4 right-4 z-50 cursor-pointer text-3xl text-gray-800"
                    onClick={toggleMenu}
                >
                    &#9776; {/* Hamburger menu icon */}
                </div>
            )}

            {/* Sliding Menu */}
            <div
                className={`fixed top-0 right-0 z-50 max-xs:h-screen h-4/5 w-64 bg-gray-800 text-white transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-end p-4">
                    {/* Close Icon */}
                    <button
                        className="text-2xl text-gray-200 hover:text-red-500"
                        onClick={toggleMenu}
                    >
                        &times; {/* Close (X) icon */}
                    </button>
                </div>
                <ul className="mt-8 space-y-6 text-center text-lg">
                    <li onClick={()=>handleNav("/")} className="hover:text-yellow-400 cursor-pointer">Home</li>
                    <li onClick={()=>handleNav("/about")} className="hover:text-yellow-400 cursor-pointer">About</li>
                    <li onClick={()=>handleNav("/projects")} className="hover:text-yellow-400 cursor-pointer">Projects</li>
                    <li onClick={()=>handleNav("/contact")} className="hover:text-yellow-400 cursor-pointer">Contact</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
