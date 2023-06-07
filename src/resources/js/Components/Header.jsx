import React from "react";

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-lg font-bold">Website</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="/main" className="hover:text-gray-400">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/login" className="hover:text-gray-400">
                                Login
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
