import React, { useState } from "react";

const TimeForm = (props) => {
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const errorMessageStyle = "text-red-500 italic text-lg";

    const handleStartTime = (event) => {
        const newValue = event.target.value;
        setStartTime(newValue);
        props.handleStartTimeChange(newValue);
    };
    const handleEndTime = (event) => {
        const newValue = event.target.value;
        setEndTime(newValue);
        props.handleEndTimeChange(newValue);
    };
    return (
        <div className="pd-4">
            <div className="pd-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Start Time
                </label>
                <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="time"
                    value={startTime}
                    onChange={handleStartTime}
                />
            </div>
            {props.errors.start_date && <div className={errorMessageStyle}>{props.errors.start_date}</div> }
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    End Time
                </label>
                <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="time"
                    value={endTime}
                    onChange={handleEndTime}
                />
            </div>
            {props.errors.end_date && <div className={errorMessageStyle}>{props.errors.end_date}</div> }
        </div>
    );
};

export default TimeForm;
