import React from "react";
import Networking from "/public/images/Networking.png";
import Global from "/public/images/Global.png";

function Top_2() {
    return (
        <div className="flex justify-center items-center bg-white">
            <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12">
                <div className="text-center">
                    <div className="mt-8 flex flex-col sm:flex-row justify-center items-center">
                        <div className="rounded-full bg-gray-300 p-2 mx-4 mb-4 sm:mb-0">
                            <img
                                src={Global}
                                alt="Global"
                                className="max-w-[40%] h-auto mx-auto rounded-full"
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center",
                                }}
                            />
                            <h2 className="text-2xl font-bold mt-4">
                                Global Image
                            </h2>
                            <p className="text-gray-600 mt-2">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed feugiat vestibulum nunc in
                                tincidunt. Vivamus vel lacus dolor.
                            </p>
                        </div>
                        <div className="rounded-full bg-blue-300 p-2 mx-4">
                            <img
                                src={Networking}
                                alt="Networking"
                                className="max-w-[40%] h-auto mx-auto rounded-full"
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center",
                                }}
                            />
                            <h2 className="text-2xl font-bold mt-4">
                                Networking Image
                            </h2>
                            <p className="text-gray-600 mt-2">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed feugiat vestibulum nunc in
                                tincidunt. Vivamus vel lacus dolor.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Top_2;
