import React, { useState } from "react";

const EventDetail = () => {
    // Mock event data
    const [event, setEvent] = useState({
        id: 1,
        userId: 123,
        address: "123 Main St, City",
        imagePath: "/images/event1.jpg",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur mi et tincidunt consectetur. Quisque vehicula felis a quam feugiat posuere. Aliquam nec ex mauris. Proin ut sapien varius, finibus risus non, tempor ipsum.",
        limitMember: "10",
        createdAt: "2023-05-31T12:34:56",
        updatedAt: "2023-05-31T12:34:56",
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleInputChange = (e) => {
        setEvent({
            ...event,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = () => {
        // Perform save logic here
        console.log("Save event:", event);
        setIsEditing(false);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Event Details</h1>
            <div className="bg-white rounded-lg shadow-lg p-4">
                <img
                    src={event.imagePath}
                    alt="Event"
                    className="w-full rounded-lg mb-4"
                />
                {isEditing ? (
                    <div>
                        <input
                            type="text"
                            name="address"
                            value={event.address}
                            onChange={handleInputChange}
                            className="w-full rounded-lg mb-2 p-2"
                        />
                        <textarea
                            name="description"
                            value={event.description}
                            onChange={handleInputChange}
                            className="w-full rounded-lg mb-2 p-2"
                        ></textarea>
                        <input
                            type="text"
                            name="limitMember"
                            value={event.limitMember}
                            onChange={handleInputChange}
                            className="w-full rounded-lg mb-2 p-2"
                        />
                        <div className="flex justify-end">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                onClick={handleSave}
                            >
                                Save
                            </button>
                            <button
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => setIsEditing(false)}
                            >
                                Back
                            </button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h2 className="text-lg font-bold mb-2">
                            Event ID: {event.id}
                        </h2>
                        <p className="text-gray-500 mb-2">
                            Address: {event.address}
                        </p>
                        <p className="text-gray-500 mb-2">
                            Description: {event.description}
                        </p>
                        <p className="text-gray-500 mb-2">
                            Limit Members: {event.limitMember}
                        </p>
                        <p className="text-gray-500 mb-2">
                            Created At:{" "}
                            {new Date(event.createdAt).toLocaleString()}
                        </p>
                        <p className="text-gray-500 mb-2">
                            Updated At:{" "}
                            {new Date(event.updatedAt).toLocaleString()}
                        </p>
                        <div className="flex justify-end">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => setIsEditing(true)}
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventDetail;
