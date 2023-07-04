import React, { useState } from "react";
import { router } from "@inertiajs/react";
import TimeForm from "./EventFormComponents/TimeForm";
import Button from "@/Components/Button";
import Switch from "@/Pages/Event/EventFormComponents/AddressForm";

const EventForm = ({ errors, auth, tags, event, related_tags }) => {
    const [limit, setLimit] = useState(event?.participant_limit_number || 2);
    const [image, setImage] = useState(event?.image || null);
    const [name, setName] = useState(event?.name || "");
    const [description, setDescription] = useState(event?.description || "");
    const [address, setAddress] = useState(event?.address || "");
    const [startTime, setStartTime] = useState(
        event?.start_date ? getDefaultDate(event?.start_date) : ""
    );
    const [endTime, setEndTime] = useState(
        event?.end_date ? getDefaultDate(event?.end_date) : ""
    );
    const [submitTags, setSubmitTags] = useState(getDefaultActiveTagNames());
    const [isDragging, setIsDragging] = useState(false);
    const [isOnline, setIsOnline] = useState(false);
    const [activeTagButtons, setActiveTagButtons] = useState(
        getDefaultActiveTags()
    );
    const [imageUrl, setImageUrl] = useState(
        event?.image ? `/storage/images/${event?.image}` : ""
    );
    const errorMessageStyle = "text-red-500 italic text-lg";

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
        setImageUrl(URL.createObjectURL(file));
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files[0];
        setImage(file);
        setImageUrl(URL.createObjectURL(file));
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
            user_id: auth?.user?.user_id,
            tags: submitTags.filter((v) => v),
        };
        if (event) {
            router.post(`/events/${event.event_id}`, {
                _method: "put",
                ...data,
            });
            return;
        }
        router.post(`/events`, data);
    };

    const addressHandleSwitchChange = (isActive) => {
        setIsOnline(isActive);
    };

    function getDefaultActiveTags() {
        if (!related_tags) return [];

        const defaultTags = [];
        related_tags.map((tag) => {
            defaultTags[tag.id] = true;
        });

        return defaultTags;
    }

    function getDefaultActiveTagNames() {
        if (!related_tags) return [];

        const defaultNameTags = [];
        related_tags.map((tag) => {
            defaultNameTags[tag.id] = tag.name.en;
        });

        return defaultNameTags;
    }

    function getDefaultDate(date) {
        date = new Date(date);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hour = String(date.getHours()).padStart(2, "0");
        const second = String(date.getHours()).padStart(2, "0");

        return `${year}-${month}-${day} ${hour}:${second}`;
    }
    return (
        <div className="flex justify-center items-center">
            <div className="w-9/12 pt-46">
                <h1 className="text-4xl text-gray-600 font-bold my-4">{event ? "Edit" : "Create"} Event</h1>
                <div className="bg-white shadow-md rounded px-8 py-6 mb-4">
                    <label className="block text-gray-600 text-lg font-bold mb-2">
                        Event Name
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Enter event name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && (
                        <div className={errorMessageStyle}>{errors.name}</div>
                    )}
                </div>
                <div
                    className={`bg-white shadow-md rounded px-8 py-6 mb-4 ${
                        isDragging ? "border-4 border-blue-300" : ""
                    }`}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                >
                    <label className="block text-gray-600 text-lg font-bold mb-2">
                        Image
                    </label>
                    <div className="mb-4">
                        {image && imageUrl ? (
                            <img
                                className="w-full sm:w-48 h-72 object-cover rounded"
                                src={imageUrl}
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

                    <Button
                        onClick={() => {
                            document.getElementById("image-upload").click();
                        }}
                    >
                        Upload Image
                    </Button>
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
                    start_date={event?.start_date}
                    end_date={event?.end_date}
                    errors={errors}
                />

                <div className="bg-white shadow-md rounded px-8 py-6 mb-4">
                    <label className="block text-gray-600 text-lg font-bold mb-2">
                        Description
                    </label>
                    <textarea
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
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

                <div className="bg-white shadow-md rounded px-8 py-6 mb-4">
                    <Switch onChange={addressHandleSwitchChange}>
                        {!isOnline && (
                            <div>
                                <div className="mt-4 w-full">
                                    <label
                                        htmlFor="onlineUrl"
                                        className="block text-lg font-bold text-gray-600"
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
                                    className="block text-lg font-bold text-gray-600"
                                >
                                    Online URL
                                </label>
                                <input
                                    type="url"
                                    id="Address"
                                    name="Address"
                                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border rounded-md"
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
                    <label className="block text-gray-600 text-lg font-bold mb-2">
                        Attendance Limit
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        placeholder="Enter limit"
                        id="limit"
                        value={limit}
                        onChange={(e) => {
                            const inputValue = e.target.value;
                            const numericValue = inputValue.replace(/\D/g, ""); // Remove non-numeric characters
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
                    <label className="block text-gray-600 text-lg font-bold mb-2">
                        Tags
                    </label>
                    {tags &&
                        tags.map((tag) => (
                            <Button
                                key={tag.id}
                                colorSet={
                                    activeTagButtons[tag.id]
                                        ? {
                                            bg_color: "bg-secondary",
                                            bg_hover: "hover:bg-secondary-hover",
                                        }
                                        : {
                                            bg_color: "bg-transparent",
                                            bg_hover: "hover:bg-transparent",
                                            text_color: "text-gray-600",
                                            text_hover: "hover: text-gray-600",
                                        }
                                }
                                className = "ml-2 mb-2"
                                onClick={() =>
                                    handleTagButton(tag.id, tag.name.en)
                                }

                            >
                                {tag.name.en}
                            </Button>
                        ))}
                </div>

                <div className="flex justify-end mb-4">
                    <Button
                        colorSet={
                            {
                                bg_color: "bg-gray-500",
                                bg_hover: "hover:bg-gray-700",
                            }
                        }
                        className="text-white mr-2 px-6"
                        onClick={() => {
                            router.visit("/events");
                        }}
                    >
                        Back
                    </Button>
                    <Button onClick={handleSubmit} >
                        {event ? "Update" : "Create"}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default EventForm;
