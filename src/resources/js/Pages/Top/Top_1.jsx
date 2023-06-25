import React from "react";
import backgroundImg from "/public/images/top_background.jpg";

function Index() {
    return (
        <div
            className="flex-grow max-h-[95vh] h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${backgroundImg})`,
            }}
        >
            <div className="flex justify-start items-center pt-16 pl-8">
                <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12">
                    <div>
                        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold">
                            <span
                                className="bg-gradient-to-r text-transparent from-black to-gray bg-clip-text"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(to right, black, gray)",
                                }}
                            >
                                Global Developer
                            </span>
                        </h1>
                        <p className="text-white mt-4 pd-8 sm:mt-6 text-xl">
                            <span
                                className="bg-gradient-to-r text-transparent from-black to-gray bg-clip-text"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(to right, black, gray)",
                                }}
                            >
                                ~ Find Global Connection ~
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="pt-12 pb-16">
                <a
                    href="/events"
                    className="text-white ml-8 mt-4 sm:mt-6 bg-blue-600 rounded-lg py-4 px-7 hover:bg-blue-500 transition duration-300"
                >
                    Check Event
                </a>
            </div>
        </div>
    );
}

export default Index;
