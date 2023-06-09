import React from "react";

function Footer() {
    return (
        <footer className="bg-primary text-white p-2">
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
                                    className="text-white hover:text-gray"
                                >
                                    Home
                                </a>
                            </li>
                            {/* <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-white"
                                >
                                    About
                                </a>
                            </li> */}

                            <li>
                                <a
                                    href="/contact"
                                    className="text-white hover:text-gray"
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
