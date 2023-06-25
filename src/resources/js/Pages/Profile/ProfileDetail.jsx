import React from "react";
import OrganizingEvents from "./DetailComponent/OrganizingEvents";
import ParticipatingEvents from "./DetailComponent/ParticipatingEvents";

const ProfileDetails = ({ user, organizing_events, participating_events }) => {
    const cardStyle = {
        backgroundImage: `url(${`/storage/images/${user.image}`})`,
        backgroundSize: "cover",
    };

    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-col items-left mt-8 sm:flex-row">
                <div className="w-full max-w-xl mb-8 sm:mb-0">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="text-center">
                            <h2 className="text-3xl sm:text-2xl md:text-6xl font-bold leading-tight mb-4 truncated">
                                {user.name}
                            </h2>
                            <div
                                className="w-48 h-48 sm:w-64 sm:h-64 mx-auto rounded-full mb-4"
                                style={cardStyle}
                            />
                        </div>
                        <div className="mb-7 pt-10">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
                                Introduction
                            </h3>
                            <p className="text-sm sm:text-base">
                                {user.introduction}
                            </p>
                        </div>
                        <div className="mb-7">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
                                Habitation
                            </h3>
                            <p className="text-sm sm:text-base">
                                {user.habitation}
                            </p>
                        </div>
                        <div className="mb-7">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight">
                                Nationality
                            </h3>
                            <p className="text-sm sm:text-base">
                                {user.nationality}
                            </p>
                        </div>
                        <div className="mb-7">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
                                Position
                            </h3>
                            <p className="text-sm sm:text-base">
                                {user.position}
                            </p>
                        </div>
                        <div className="mb-7">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
                                URL
                            </h3>
                            <a
                                href={user.url}
                                className="text-blue-500 hover:underline text-sm sm:text-base"
                            >
                                {user.url}
                            </a>
                        </div>
                        <div className="mb-7">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
                                Attendance Count
                            </h3>
                            <p className="text-sm sm:text-base">
                                {user.attendance_count}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-xl flex-grow">
                    <div className="bg-white shadow-md rounded-lg p-6 h-full flex flex-col">
                        <div className="mb-7 flex-grow">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
                                Participating Events
                            </h3>
                            <div className="flex flex-wrap">
                                <ParticipatingEvents
                                    events={participating_events}
                                />
                            </div>
                        </div>
                        <div className="mb-4 flex-grow">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
                                Organizing Events
                            </h3>
                            <div className="flex flex-wrap">
                                <OrganizingEvents events={organizing_events} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;
