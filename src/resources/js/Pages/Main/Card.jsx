import React from "react";

const Card = ({ imageUrl, title, description }) => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
            <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full" src={imageUrl} alt={title} />
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{title}</h2>
                    <p className="text-gray-700">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
