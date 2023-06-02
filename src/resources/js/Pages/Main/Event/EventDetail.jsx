import React, { useState } from "react";

const EventDetail = () => {
    // Mock event data
    const [event, setEvent] = useState({
        id: 1,
        userId: 123,
        title: "Event",
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

                <div>
                    <p className="text-gray-500 mb-2">Title: {event.title}</p>
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
                        Created At: {new Date(event.createdAt).toLocaleString()}
                    </p>
                    <p className="text-gray-500 mb-2">
                        Updated At: {new Date(event.updatedAt).toLocaleString()}
                    </p>
                    <div className="flex justify-end">
                        <a href="/main">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => setIsEditing(true)}
                            >
                                Back
                            </button>
                        </a>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => setIsEditing(true)}
                        >
                            Attend
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetail;
