import React from "react";
import JubHunting from "/public/images/JubHunting.png";
import Self from "/public/images/Self.png";
import Project from "/public/images/Project.png";

function Top_3() {
    return (
        <div className="flex justify-center items-center bg-white pt-6">
            <div className="w-full md:w-10/12 lg:w-9/12 xl:w-9/12">
                <div className="text-center">
                    <div className="mt-8 flex flex-col sm:flex-row justify-center items-center">
                        <div className="rounded-full bg-gray-300 p-2 mx-4 mb-4 sm:mb-0">
                            <img
                                src={Project}
                                alt="Project"
                                className="max-w-[45%] h-auto mx-auto rounded-full"
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center",
                                }}
                            />
                            <h2 className="text-2xl font-bold mt-4">
                                Project Image
                            </h2>
                            <p className="text-gray-600 mt-2">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed feugiat vestibulum nunc in
                                tincidunt. Vivamus vel lacus dolor.
                            </p>
                        </div>
                        <div className="rounded-full bg-blue-300 p-2 mx-4 ">
                            <img
                                src={JubHunting}
                                alt="JubHunting"
                                className="max-w-[45%] h-auto mx-auto rounded-full"
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center",
                                }}
                            />
                            <h2 className="text-2xl font-bold mt-4">
                                JubHunting Image
                            </h2>
                            <p className="text-gray-600 mt-2">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed feugiat vestibulum nunc in
                                tincidunt. Vivamus vel lacus dolor.
                            </p>
                        </div>
                        <div className="rounded-full bg-gray-300 p-2 mx-4 mb-4 sm:mb-0">
                            <img
                                src={Self}
                                alt="Self"
                                className="max-w-[45%] h-auto mx-auto rounded-full"
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center",
                                }}
                            />
                            <h2 className="text-2xl font-bold mt-4">
                                Self Image
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

export default Top_3;
