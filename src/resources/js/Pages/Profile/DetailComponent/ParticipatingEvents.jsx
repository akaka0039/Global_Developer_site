import React, { useState } from "react";
import { router } from "@inertiajs/react";

const ParticipatingEvents = ({ events }) => {
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = (eventId) => {
        router.get(`/events/${eventId}`);
    };

    const renderEvents = (events) => {
        if (!events || events.length === 0) {
            return <p>No events to display</p>;
        }

        return events.slice(0, 2).map((event) => (
            <div
                key={event.event_id}
                className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-2"
                onClick={() => handleClick(event.event_id)}
            >
                <div className="max-w-sm">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:bg-blue-100">
                        <div
                            className="w-full h-40 bg-cover bg-no-repeat bg-center"
                            style={{
                                backgroundImage: `url(/storage/images/${event.image})`,
                                backgroundSize: "cover",
                            }}
                        ></div>
                        <div className="p-3">
                            <h2 className="text-xl font-bold mb-2 truncate">
                                {event.name}
                            </h2>
                            <p className="text-gray-700 truncate">
                                {event.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        ));
    };

    const renderPopup = () => {
        if (!events || events.length === 0) {
            return <p>No events to display</p>;
        }

        return (
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 flex items-center justify-center overflow-y-auto">
                <div className="max-h-screen p-10 rounded-lg">
                    <h2 className="text-xl text-white font-bold mb-4">
                        All Participating Events
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 ">
                        {events.map((event) => (
                            <div
                                key={event.event_id}
                                className="p-2"
                                onClick={() => handleClick(event.event_id)}
                            >
                                <div className="max-w-sm">
                                    <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:bg-blue-100">
                                        <div className="relative h-40">
                                            <div
                                                className="w-full h-40 bg-cover bg-no-repeat bg-center"
                                                style={{
                                                    backgroundImage: `url(/storage/images/${event.image})`,
                                                    backgroundSize: "cover",
                                                }}
                                            ></div>
                                        </div>
                                        <div className="p-3">
                                            <h2 className="text-xl font-bold mb-2 truncate">
                                                {event.name}
                                            </h2>
                                            <p className="text-gray-700 truncate">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded"
                        onClick={() => setShowPopup(false)}
                    >
                        Close
                    </button>
                </div>
            </div>
        );
    };

    return (
        <>
            <div>
                <div>
                    <div className="flex flex-wrap justify-center">
                        {renderEvents(events)}
                    </div>
                    {events && events.length > 2 && (
                        <div className="flex justify-end">
                            <div
                                className="text-blue-500 cursor-pointer mt-4"
                                onClick={() => setShowPopup(true)}
                            >
                                Show more events
                            </div>
                        </div>
                    )}
                </div>
                {showPopup && renderPopup()}
            </div>
        </>
    );
};

export default ParticipatingEvents;
