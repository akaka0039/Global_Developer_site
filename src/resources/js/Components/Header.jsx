import React from "react";

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-lg font-bold">My Website</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Member
                            </a>
                        </li>
                        <li>
                            <a href="/article" className="hover:text-gray-400">
                                Article
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Project
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Sign up
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Sign in
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
