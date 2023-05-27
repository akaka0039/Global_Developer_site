import React from "react";
import Card from "./Card";
import Top1 from "./Top1";

function Top() {
    const backgroundImageUrl = "/images/top_background.jpg";
    return (
        <div className="flex h-screen flex-col">
            <div
                className="h-screen flex-grow bg-cover bg-center"
                style={{
                    backgroundImage: `url('${backgroundImageUrl}')`,
                }}
            >
                <div className="flex justify-center items-center pt-16">
                    <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12">
                        <div className="text-center">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black-100">
                                Global Developer
                            </h1>
                            <p className="text-balck-100 mt-4 sm:mt-6">
                                ~ based on your participation ~
                            </p>
                        </div>
                    </div>
                </div>
                <Card />
            </div>
            <Top1 />
        </div>
    );
}

export default Top;
