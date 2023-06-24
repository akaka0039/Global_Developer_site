import React from "react";
import { Link } from "@inertiajs/react";
import SidebarToggle from "./Sidebar";

export default function Header({ auth }) {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-lg font-bold">Website</h1>
                <nav>
                    <ul className="flex">
                        {auth?.user ? (
                            <>
                                <li>
                                    <a
                                        href="/events"
                                        className="text-lg p-2 items-center hover:text-gray-400"
                                    >
                                        Home
                                    </a>
                                </li>

                                <SidebarToggle auth={auth}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                                        />
                                    </svg>
                                </SidebarToggle>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link
                                        href="/events"
                                        className="p-4 hover:text-gray-400"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/login"
                                        className="p-2 hover:text-gray-400"
                                    >
                                        Login
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
