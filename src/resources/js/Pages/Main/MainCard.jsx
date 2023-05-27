import React from "react";

const MainCard = ({ imageUrl, title, description }) => {
    return (
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-auto" src={imageUrl} alt={title} />
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
};

export default MainCard;
