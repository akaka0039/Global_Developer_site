import React, { useEffect, useState } from "react";
import { router } from "@inertiajs/react";

const MainCard = ({ event }) => {
    const cardStyle = {
        backgroundImage: `url(${`/storage/images/${event.image}`})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        aspectRatio: "16/9",
    };

    function handleClick() {
        router.get(`/events/${event.event_id}`);
    }
    const [timeRemaining, setTimeRemaining] = useState(getTimeRemainingText());

    function getTimeRemainingText() {
        const currentDate = new Date();
        const startDate = new Date(event.start_date);
        const endDate = new Date(event.end_date);
        const timeDiff = startDate.getTime() - currentDate.getTime();
        if (currentDate >= endDate) {
            return "End the event";
        } else if (timeDiff <= 0) {
            return "Currently ongoing";
        } else {
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
            let timeString = "";
            if (days > 0) {
                timeString += `${days}d `;
            }
            if (hours > 0) {
                timeString += `${hours}h `;
            }
            if (minutes > 0) {
                timeString += `${minutes}m `;
            }
            timeString += `${seconds}s`;

            return timeString.trim();
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining(getTimeRemainingText());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, [event.start_date]);

    return (
        <div
            className="max-w-xl mx-auto w-full cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden hover:bg-orange-100 pb-3"
            onClick={handleClick}
        >
            <div
                style={cardStyle}
                className="w-full h-auto pb-[56.25%] lg:pb-[75%]"
            ></div>
            <div className="p-3">
                <div className="text-center text-lg font-medium text-gray-800">
                    Upcoming Event
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <h2 className="text-3xl text-gray-700 font-bold w-8/12 truncate">
                        {event.name}
                    </h2>
                    <p className="text-sm mb-2 sm:mb-4 w-4/12 md:text-md lg:mb-3 xl:text-xl xl:mb-4 md:pl-7 md:p-2 pt-3">
                        {timeRemaining}
                    </p>
                </div>
                <p className="text-lg text-gray-700 truncate">
                    {event.description}
                </p>
            </div>
        </div>
    );
};

export default MainCard;
