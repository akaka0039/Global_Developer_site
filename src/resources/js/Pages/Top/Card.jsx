import React from "react";

function Card() {
    return (
        <div className="flex flex-wrap justify-center items-center py-8 sm:py-16 md:py-24 lg:py-32 xl:py-40">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2 px-4 sm:px-8">
                <div className="bg-white shadow-md rounded-lg p-8 sm:p-16 h-full flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                            Discover Event
                        </h2>
                        <p className="text-blue-600 mt-4 sm:mt-6">
                            Check Our Event and make connection
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2 px-4 sm:px-8">
                <div className="bg-white shadow-md rounded-lg p-8 sm:p-16 h-full flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                            Discover Developers
                        </h2>
                        <p className="text-blue-600 mt-4 sm:mt-6">
                            Matching Engineer around the world
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2 px-4 sm:px-8">
                <div className="bg-white shadow-md rounded-lg p-8 sm:p-16 h-full flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                            Create Event
                        </h2>
                        <p className="text-blue-600 mt-4 sm:mt-6">
                            Create Event
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
