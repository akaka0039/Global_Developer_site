import React, { useState } from "react";
import Header from "@/Components/Header";

const EditEventPage = ({ event }) => {
    console.log(event);
    // Mock event data
    const [formData, setFormData] = useState({
        id: 1,
        userId: 123,
        title: "Event",
        address: "123 Main St, City",
        imagePath: "/images/top_background.jpg",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur mi et tincidunt consectetur. Quisque vehicula felis a quam feugiat posuere. Aliquam nec ex mauris. Proin ut sapien varius, finibus risus non, tempor ipsum.",
        limitMember: "9",
        createdAt: "2023-05-31T12:34:56",
        updatedAt: "2023-05-31T12:34:56",
    });

    // drag & drop
    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        // const imagePath = URL.createObjectURL(file);
        setFormData({ ...formData, imagePath });
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        // Add drag over styles if needed
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        // Remove drag over styles if needed
    };

    return (
        <div>
            <Header />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-9">
                <h1 className="text-5xl font-bold text-gray-900">Event Edit</h1>
                <form className="mt-8 space-y-6">
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                                type="button"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
                                Delete
                            </button>
                        </div>
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="title"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        autoComplete="off"
                                        value={formData.title}
                                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="address"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        name="address"
                                        id="address"
                                        autoComplete="off"
                                        value={formData.address}
                                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="startDate"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Start date
                                    </label>
                                    <input
                                        type="datetime-local"
                                        name="startDate"
                                        id="startDate"
                                        value={formData.createdAt}
                                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="startDate"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        End date
                                    </label>
                                    <input
                                        type="datetime-local"
                                        name="startDate"
                                        id="startDate"
                                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="image"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Image
                                    </label>
                                    {formData.imagePath && (
                                        <img
                                            src={formData.imagePath}
                                            alt="Event"
                                            className="mt-2 h-72 object-contain"
                                        />
                                    )}
                                    <div
                                        className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                                        onDrop={handleDrop}
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                    >
                                        <div className="space-y-1 text-center">
                                            <svg
                                                className="mx-auto h-12 w-12 text-gray-400"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 48 48"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M20 9l-7 7m0 0l7 7m-7-7v18"
                                                />
                                            </svg>
                                            <div className="flex text-sm text-gray-600">
                                                <label
                                                    htmlFor="image"
                                                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                                                >
                                                    <span>Select Image</span>
                                                    <input
                                                        id="image"
                                                        name="image"
                                                        type="file"
                                                        className="sr-only"
                                                    />
                                                </label>
                                                <p className="pl-1">
                                                    or drag & drop
                                                </p>
                                            </div>
                                            <p className="text-xs text-gray-500">
                                                PNG、JPG、GIF Max size: 5MB
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-6">
                                    <label
                                        htmlFor="description"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Description
                                    </label>
                                    <textarea
                                        name="description"
                                        id="description"
                                        rows="3"
                                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    ></textarea>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="limitMember"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Limit of Attendance
                                    </label>
                                    <input
                                        type="number"
                                        name="limitMember"
                                        id="limitMember"
                                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                                type="button"
                                className="inline-flex justify-center py-2 mr-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grey-500"
                            >
                                Back
                            </button>
                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4  border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditEventPage;
