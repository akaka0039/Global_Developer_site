import React from "react";
import { router } from "@inertiajs/react";
import defaultImage from "../../../../public/images/top_background.jpg";

const Card = ({ event }) => {
    const cardStyle = {
        backgroundImage: `url(${event.imageUrl || defaultImage})`,
    };

    function handleClick() {
        router.get(`/events/${event.event_id}`);
    }

    return (
        <div
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2 "
            onClick={handleClick}
        >
            <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:bg-blue-100">
                <div
                    className="w-full h-40 bg-cover bg-no-repeat bg-center"
                    style={cardStyle}
                ></div>
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2" key={event.event_id}>
                        {event.title}
                    </h2>
                    <p className="text-gray-700">{event.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
