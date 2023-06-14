import React, { useState } from "react";
import { router } from "@inertiajs/react";
import GeneralLayout from "@/Layouts/GeneralLayout";

const EventDetail = ({ auth, event }) => {
    // for debug
    // console.log(auth);

    function handleClick() {
        // console.log(event.event_id);
        router.get(`/events/${event.event_id}/edit`);
    }

    return (
        <GeneralLayout auth={auth}>
            <div className="flex flex-col justify-center items-center h-full pt-8">
                <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-end pb-3">
                        <button
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded  focus:outline-none focus:shadow-outline"
                            onClick={handleClick}
                        >
                            Edit
                        </button>
                    </div>
                    <div className="bg-white overflow-hidden shadow sm:rounded-lg">
                        <div className="relative">
                            <img
                                className="w-full h-96 object-cover sm:h-80"
                                src={event.image}
                                alt="Event Image"
                            />
                            <div className="absolute inset-0 bg-black opacity-25"></div>
                        </div>
                        <div className="px-6 py-8 sm:px-10">
                            <h1 className="text-4xl leading-8 font-bold text-gray-900 mb-4">
                                {event.name}
                            </h1>
                            <p className="text-sm text-gray-500 mb-2">
                                Start：{event.created_at}
                            </p>
                            <p className="text-sm text-gray-500 mb-2">
                                End ： {event.updated_at}
                            </p>
                        </div>

                        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Location
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        {event.address}
                                    </dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Limit of Attendance
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        {event.participant_limit_number}/10
                                    </dd>
                                </div>
                                <div className="sm:col-span-2">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Description
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        {event.description}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <div className="bg-gray-100 px-4 py-4 sm:px-6 flex justify-end">
                            <div className="pl-2">
                                <a href="/events">
                                    <button className="bg-gray-400 text-white rounded-md px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-600">
                                        Back
                                    </button>
                                </a>
                            </div>
                            <div className="pl-2">
                                <button className="bg-blue-500 text-white rounded-md px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-600">
                                    attend
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GeneralLayout>
    );
};

export default EventDetail;
