import React from "react";
import TimeForm from "./TimeForm";
import Header from "@/Components/Header";

const EventForm = () => {
    const [limit, setLimit] = React.useState("");
    const [image, setImage] = React.useState(null);
    const [isDragging, setIsDragging] = React.useState(false);

    const handleLimitChange = (e) => {
        setLimit(e.target.value);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files[0];
        setImage(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // フォームの送信処理を実行する
        console.log("Submitted!");
        console.log("Limit:", limit);
        console.log("Image:", image);
    };
    return (
        <div>
            <div className="pb-10">
                <Header />
            </div>
            <div className="flex justify-center items-center">
                <div className="w-9/12 pt-46">
                    <h1 className="text-2xl font-bold mb-4">Event Details</h1>
                    <div className="bg-white shadow-md rounded px-8 py-6 mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Event Name
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Enter event name"
                        />
                    </div>
                    <div
                        className={`bg-white shadow-md rounded px-8 py-6 mb-4 ${
                            isDragging ? "border-4 border-blue-300" : ""
                        }`}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                    >
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Image
                        </label>
                        <div className="mb-4">
                            {image ? (
                                <img
                                    className="w-full sm:w-48 h-auto object-cover rounded"
                                    src={URL.createObjectURL(image)}
                                    alt="Event"
                                />
                            ) : (
                                <div className="w-full sm:w-48 sm:h-48 h-auto bg-gray-200 border border-gray-400 rounded flex items-center justify-center">
                                    <p className="text-gray-500">
                                        Drag &amp; drop an image
                                    </p>
                                </div>
                            )}
                        </div>

                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                        />
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => {
                                document.getElementById("image-upload").click();
                            }}
                        >
                            Upload Image
                        </button>
                    </div>

                    <div className="bg-white shadow-md rounded px-8 py-6 mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Event Date
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="date"
                        />
                    </div>
                    <TimeForm />
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Content
                        </label>
                        <textarea
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            rows={4}
                            placeholder="Enter your message"
                        ></textarea>
                    </div>
                    <div>
                        <label
                            htmlFor="location"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Location
                        </label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            placeholder="Enter the location"
                            // value={location}
                            // onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>

                    <div className="mt-4">
                        <label
                            htmlFor="onlineUrl"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Online URL
                        </label>
                        <input
                            type="text"
                            id="onlineUrl"
                            name="onlineUrl"
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            placeholder="Enter the online URL"
                            // value={onlineUrl}
                            // onChange={(e) => setOnlineUrl(e.target.value)}
                        />
                    </div>
                    <div className="bg-white shadow-md rounded px-8 py-6 mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Attendance Limit
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number"
                            placeholder="Enter limit"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded  focus:outline-none focus:shadow-outline">
                            Back
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventForm;
