import React, { useState } from "react";

const TimeForm = (props) => {
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [eventStartDate, setEventStartDate] = useState(getToday());
    const [eventEndDate, setEventEndDate] = useState(getToday());
    const errorMessageStyle = "text-red-500 italic text-lg";

    const handleEventStartChange = (event) => {
        const newValue = event.target.value;
        setEventStartDate(newValue);
        props.handleStartTimeChange(`${newValue} ${startTime}`);
    };

    const handleEventEndChange = (event) => {
        const newValue = event.target.value;
        setEventEndDate(newValue);
        props.handleStartTimeChange(`${newValue} ${endTime}`);
    };

    const handleStartTimeChange = (event) => {
        const newValue = event.target.value;
        setStartTime(newValue);
        props.handleStartTimeChange(`${eventStartDate} ${newValue}`);
    };

    const handleEndTimeChange = (event) => {
        const newValue = event.target.value;
        setEndTime(newValue);
        props.handleEndTimeChange(`${eventEndDate} ${newValue}`);
    };

    function getToday() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    return (
        <div>
            <div className="flex-wrap pd-4 flex">
                <div className="bg-white shadow-md rounded px-8 py-6 mb-4 flex-grow">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Event Start
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="date"
                        value={eventStartDate}
                        onChange={handleEventStartChange}
                    />
                </div>
                <div className="bg-white shadow-md rounded px-8 py-6 mb-4 flex-grow">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Start Time
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="time"
                        value={startTime}
                        onChange={handleStartTimeChange}
                    />
                </div>
            </div>

            <div className="flex-wrap pd-4 flex">
                <div className="bg-white shadow-md rounded px-8 py-6 mb-4 flex-grow">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Event End
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="date"
                        value={eventEndDate}
                        onChange={handleEventEndChange}
                    />
                </div>
                <div className="bg-white shadow-md rounded px-8 py-6 mb-4 flex-grow">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        End Time
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="time"
                        value={endTime}
                        onChange={handleEndTimeChange}
                    />
                </div>
            </div>
            {props.errors.start_date && (
                <div className={errorMessageStyle}>
                    {props.errors.start_date}
                </div>
            )}
            {props.errors.end_date && (
                <div className={errorMessageStyle}>{props.errors.end_date}</div>
            )}
        </div>
    );
};

export default TimeForm;
