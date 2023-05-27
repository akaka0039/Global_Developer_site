import React from "react";

function Top1() {
    const backgroundImageUrl = "/images/top_background.jpg";
    return (
        <div className="flex justify-center items-center  bg-white">
            <div
                className="h-screen flex-grow bg-cover bg-center  rounded-full rounded-l-lg"
                style={{
                    backgroundImage: `url('${backgroundImageUrl}')`,
                }}
            ></div>
            <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black-100">
                        Concept
                    </h1>
                    <p className="text-balck-100 mt-4 sm:mt-6">
                        Making Connection
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Top1;
