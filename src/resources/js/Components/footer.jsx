import React from "react";

function Footer() {
    return (
        <footer className=" bg-slate-800 ">
            <div className="container mx-auto lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-center text-white">
                    <div>
                        <h2 className="text-xl font-bold">My Website</h2>
                        <p className="text-sm">
                            © 2023 My Website. All rights reserved.
                        </p>
                    </div>
                    <div>
                        <ul className="flex space-x-4">
                            <li>
                                <a
                                    href="/events"
                                    className="text-gray-300 hover:text-white"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-white"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-white"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-white"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
