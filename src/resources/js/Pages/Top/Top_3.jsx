import React from "react";
import JobHunting from "/public/images/JobHunting.png";
import Self from "/public/images/Self.png";
import Project from "/public/images/Project.png";

function Top_3() {
    return (
        <div className="flex justify-center items-center bg-white pt-3">
            <div className="w-full md:w-10/12 lg:w-9/12 xl:w-9/12">
                <div className="text-center">
                    <div className="mt-8 flex flex-col sm:flex-row justify-center items-center">
                        <div className="rounded-full bg-blue-300 p-2 mx-4 mb-4 sm:mb-0">
                            <img
                                src={Project}
                                alt="Project"
                                className="max-w-[45%] h-auto mx-auto rounded-full"
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center",
                                }}
                            />
                            <h2 className="text-4xl font-bold mt-4">Project</h2>
                            <p className="text-gray-600 mt-2">
                                Collaboratively launching and developing
                                projects within our community to enhance skills
                                and leverage for career opportunities.
                            </p>
                        </div>
                        <div className="rounded-full bg-gray-300 p-2 mx-4 ">
                            <img
                                src={JobHunting}
                                alt="JobHunting"
                                className="max-w-[45%] h-auto mx-auto rounded-full"
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center",
                                }}
                            />
                            <h2 className="text-4xl font-bold mt-4">
                                JobHunting
                            </h2>
                            <p className="text-gray-600 mt-2">
                                Leverage our vibrant community for job hunting,
                                where connections, resources, and support propel
                                you towards career success.
                            </p>
                        </div>
                        <div className="rounded-full bg-blue-300 p-2 mx-4  my-4">
                            <img
                                src={Self}
                                alt="Self"
                                className="max-w-[45%] h-auto mx-auto rounded-full"
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center",
                                }}
                            />
                            <h2 className="text-4xl font-bold mt-4">Self</h2>
                            <p className="text-gray-600 mt-2">
                                Grow personally and professionally through
                                community events, fostering learning, skill
                                development, and a supportive network.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Top_3;
