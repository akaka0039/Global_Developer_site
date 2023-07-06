import React from "react";
import { router } from "@inertiajs/react";

const Card = ({ event }) => {
    const cardStyle = {
        backgroundImage: `url(${`/storage/images/${event.image}`})`,
        backgroundSize: "cover",
    };

    function handleClick() {
        router.get(`/events/${event.event_id}`);
    }

    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 py-2 px-5">
            <div
                className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:bg-orange-100"
                onClick={handleClick}
            >
                <div
                    className="w-full h-40 bg-cover bg-no-repeat bg-center"
                    style={cardStyle}
                ></div>
                <div className="p-4">
                    <h2 className="text-xl text-gray-700 font-bold mb-2" key={event.event_id}>
                        {event.name}
                    </h2>
                    <p className="text-gray-600 truncate">
                        {event.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
