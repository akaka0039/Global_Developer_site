import React, { useState } from "react";

const TimeForm = (props) => {
    const [startTime, setStartTime] = useState(getDefaultTime(props.start_date));
    const [endTime, setEndTime] = useState(getDefaultTime(props.end_date));
    const [eventStartDate, setEventStartDate] = useState(getDefaultDate(props.start_date));
    const [eventEndDate, setEventEndDate] = useState(getDefaultDate(props.end_date));
    const errorMessageStyle = "text-red-500 italic text-lg";

    const handleEventStartChange = (event) => {
        const newValue = event.target.value;
        setEventStartDate(newValue);
        props.handleStartTimeChange(`${newValue} ${startTime}`);
    };

    const handleEventEndChange = (event) => {
        const newValue = event.target.value;
        setEventEndDate(newValue);
        props.handleEndTimeChange(`${newValue} ${endTime}`);
    };

    const handleStartTimeChange = (event) => {
        const newValue = event.target.value;
        const time = new Date(props.start_date);
        setStartTime(newValue);
        props.handleStartTimeChange(`${eventStartDate} ${newValue}`);
    };

    const handleEndTimeChange = (event) => {
        const newValue = event.target.value;
        setEndTime(newValue);
        props.handleEndTimeChange(`${eventEndDate} ${newValue}`);
    };

    function getDefaultDate(date) {
        date = date ? new Date(date) : new Date();

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    function getDefaultTime(time) {
        if (!time) return "";

        const dateTime = new Date(time);
        const hour = String(dateTime.getHours()).padStart(2, "0");
        const second = String(dateTime.getHours()).padStart(2, "0");
        return `${hour}:${second}`;
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
