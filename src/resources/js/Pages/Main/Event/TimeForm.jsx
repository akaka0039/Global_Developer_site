import React, { useState } from "react";

const TimeForm = () => {
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

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
                    onChange={(e) => setStartTime(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    End Time
                </label>
                <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                />
            </div>
        </div>
    );
};

export default TimeForm;
