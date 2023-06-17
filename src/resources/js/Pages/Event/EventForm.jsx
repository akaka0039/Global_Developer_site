import React, { useState } from "react";
import TimeForm from "./EventFormComponents/TimeForm";
import { router } from "@inertiajs/react";
import GeneralLayout from "@/Layouts/GeneralLayout";
import Switch from "@/Pages/Event/EventFormComponents/AddressForm";

const EventForm = ({ errors, auth, tags }) => {
    const [limit, setLimit] = React.useState("");
    const [image, setImage] = React.useState(null);
    const [isDragging, setIsDragging] = React.useState(false);
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [startTime, setStartTime] = React.useState("");
    const [endTime, setEndTime] = React.useState("");
    const errorMessageStyle = "text-red-500 italic text-lg";
    const [isOnline, setIsOnline] = useState(false);
    const [activeTagButtons, setActiveTagButtons] = useState([])
    const [submitTags, setSubmitTags] = useState([])

    const handleTagButton = (index, tagName) => {
        // Copy current tag status
        const updatedButtons = [...activeTagButtons];
        const updatedSubmitTags = [...submitTags];

        // Switch Tag Status
        updatedButtons[index] = !updatedButtons[index];
        updatedSubmitTags[index] = updatedButtons[index] ? tagName : null;

        // Set updated state
        setActiveTagButtons(updatedButtons);
        setSubmitTags(updatedSubmitTags);
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

    const handleStartTimeChange = (newValue) => {
        setStartTime(newValue);
    };

    const handleEndTimeChange = (newValue) => {
        setEndTime(newValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            address: address,
            participant_limit_number: limit,
            image: image,
            description: description,
            start_date: startTime,
            end_date: endTime,
            is_online: isOnline,
            user_id: auth.user.user_id,
            tags: submitTags.filter(v => v),
        };
        router.post(`/events`, data);
    };

    const addressHandleSwitchChange = (isActive) => {
        setIsOnline(isActive);
    };
    return (
        <GeneralLayout auth={auth}>
            <div className="flex justify-center items-center">
                <div className="w-9/12 pt-46">
                    <h1 className="text-2xl font-bold mb-4">Event Form</h1>
                    <div className="bg-white shadow-md rounded px-8 py-6 mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Event Name
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Enter event name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && (
                            <div className={errorMessageStyle}>
                                {errors.name}
                            </div>
                        )}
                    </div>
                    <div
                        className={`bg-white shadow-md rounded px-8 py-6 mb-4 ${isDragging ? "border-4 border-blue-300" : ""
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

                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => {
                                document.getElementById("image-upload").click();
                            }}
                        >
                            Upload Image
                        </button>
                        <input
                            id="image-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                        />
                    </div>

                    <TimeForm
                        handleStartTimeChange={handleStartTimeChange}
                        handleEndTimeChange={handleEndTimeChange}
                        errors={errors}
                    />

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Description
                        </label>
                        <textarea
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            rows={4}
                            placeholder="Enter your message"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                        {errors.description && (
                            <div className={errorMessageStyle}>
                                {errors.description}
                            </div>
                        )}
                    </div>

                    <div className="bg-white shadow-md rounded px-8 py-6 mb-4">
                        <Switch onChange={addressHandleSwitchChange}>
                            {!isOnline && (
                                <div>
                                    <div className="mt-4 w-full">
                                        <label
                                            htmlFor="onlineUrl"
                                            className="block text-sm font-bold text-gray-700"
                                        >
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            id="Address"
                                            name="Address"
                                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            placeholder="Enter the Address"
                                            value={address}
                                            onChange={(e) =>
                                                setAddress(e.target.value)
                                            }
                                        />
                                        {errors.address && (
                                            <div className={errorMessageStyle}>
                                                {errors.address}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                            {isOnline && (
                                <div className="mt-4 w-full">
                                    <label
                                        htmlFor="onlineUrl"
                                        className="block text-sm font-bold text-gray-700"
                                    >
                                        Online
                                    </label>
                                    <input
                                        type="url"
                                        id="Address"
                                        name="Address"
                                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Enter the online URL"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                    {errors.address && (
                                        <div className={errorMessageStyle}>
                                            {errors.address}
                                        </div>
                                    )}
                                </div>
                            )}
                        </Switch>
                    </div>

                    <div className="bg-white shadow-md rounded px-8 py-6 mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Attendance Limit
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number"
                            placeholder="Enter limit"
                            id="limit"
                            value={limit}
                            onChange={(e) => {
                                const inputValue = e.target.value;
                                const numericValue = inputValue.replace(
                                    /\D/g,
                                    ""
                                ); // 数字以外の文字を削除
                                setLimit(numericValue);
                            }}
                        />
                        {errors.participant_limit_number && (
                            <div className={errorMessageStyle}>
                                {errors.participant_limit_number}
                            </div>
                        )}
                    </div>

                    <div className="bg-white shadow-md rounded px-8 py-6 mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Tags
                        </label>
                        {tags && tags.map((tag) => (
                            <button
                                key={tag.id}
                                className={activeTagButtons[tag.id] ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mb-4' : 'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-4 mb-4'}
                                onClick={() => handleTagButton(tag.id, tag.name.en)}
                            >
                                {tag.name.en}
                            </button>
                        ))}
                    </div>

                    <div className="flex justify-end">
                        <button
                            id="back-button"
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded  focus:outline-none focus:shadow-outline"
                            onClick={() => {
                                router.visit("/events");
                            }}
                        >
                            Back
                        </button>
                        <button
                            type="button"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline"
                            onClick={handleSubmit}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </GeneralLayout>
    );
};

export default EventForm;
