import React, { useEffect, useState } from "react";

const Switch = ({ label, onChange, children }) => {
    const [isActive, setIsActive] = useState(false);
    const [switchLabel, setSwitchLabel] = useState(label);

    useEffect(() => {
        setSwitchLabel(isActive ? "Online" : "In Person");
    }, [isActive]);

    const handleClick = () => {
        setIsActive(!isActive);
        onChange(!isActive);
    };

    return (
        <div>
            <div className="flex items-left">
                <div
                    className={`relative inline-flex items-center pl-0.5 w-14 h-7 rounded-full  cursor-pointer ${
                        isActive ? "bg-blue-500" : "bg-gray-300"
                    }`}
                    onClick={handleClick}
                >
                    <div
                        className={`inline-block w-7 h-6 rounded-full transform transition-transform ${
                            isActive ? "translate-x-6" : ""
                        } ${isActive ? "bg-white" : "bg-gray-400"}`}
                    />
                </div>
                <div className="flex flex-grow">
                    <span className="pl-2 items-center block text-gray-600 text-lg font-bold mb-2">
                        {switchLabel}
                    </span>
                </div>
            </div>
            <div className="w-full">
                <div className="pt-6 pb-6">{children}</div>
            </div>
        </div>
    );
};

export default Switch;
