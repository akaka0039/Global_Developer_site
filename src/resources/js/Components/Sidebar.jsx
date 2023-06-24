import React, { useState, useRef } from "react";
import { Link } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";

const Sidebar = ({ children, onClose }) => {
    return (
        <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-end"
            onClick={onClose}
        >
            <div
                className="bg-white w-64 h-screen overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-end p-3">
                    <button
                        type="button"
                        className="text-gray-400 hover:text-gray-500"
                        onClick={onClose}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div className="relative z-50">{children}</div>
            </div>
        </div>
    );
};

const SidebarToggle = ({ children, auth }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);
    const dropdownRef = useRef(null);

    const closeDropdown = () => {
        if (dropdownRef.current) {
            dropdownRef.current.close();
        }
    };

    const handleToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleClose = () => {
        setIsSidebarOpen(false);
    };

    const handleOutsideClick = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsSidebarOpen(false);
        }
    };

    return (
        <>
            <button
                type="button"
                className="flex items-center px-3 py-2 text-lg leading-4 font-medium rounded-md text-white hover:text-gray-300 transition ease-in-out duration-150"
                onClick={handleToggle}
            >
                {children}
            </button>
            {isSidebarOpen && (
                <Sidebar onClose={handleClose}>
                    <ul className="py-4 px-6">
                        <li className="flex items-center mb-2 text-gray-700 hover:text-gray-900">
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
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                />
                            </svg>

                            <h2 className="text-lg text-gray-700 hover:text-gray-900">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button
                                            type="button"
                                            className="flex items-center px-3 py-2  text-lg leading-4 font-medium rounded-md text-gray-800  hover:text-gray-300 transition ease-in-out duration-150"
                                            ref={dropdownRef}
                                        >
                                            {auth.user.name}

                                            <svg
                                                className="ml-2 -mr-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </h2>
                        </li>
                        <li>
                            <ul className="pl-4 pb-1 text-gray-700 hover:text-gray-900">
                                <li>
                                    <Link
                                        href={`/profile/${auth.user.user_id}`}
                                        className="hover:text-gray-400"
                                    >
                                        Detail
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("profile.edit")}
                                        className="hover:text-gray-400"
                                    >
                                        Edit
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="py-2 px-6">
                        <li className="flex items-center mb-2 text-gray-700 hover:text-gray-900">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 mr-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                                />
                            </svg>
                            <h2 className="text-lg text-gray-700 hover:text-gray-900">
                                Events
                            </h2>
                        </li>
                        <li>
                            <ul className="pl-4 pb-1 text-gray-700 hover:text-gray-900">
                                <li>
                                    <Link
                                        href="/events/create"
                                        className="hover:text-gray-400"
                                    >
                                        Create
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </Sidebar>
            )}
        </>
    );
};

export default SidebarToggle;
