import React from "react";
import GeneralLayout from "../../Layouts/GeneralLayout";

const ProfileDetails = ({ auth, user, organizing_events, participating_events }) => {
    // console.log(user, organizing_events, participating_events);
    auth = "";
    user = {
        name: "John Doefa",
        introduction: "Hello, I'm John Doe.",
        image: "/images/top_background.jpg",
        habitation: "Tokyo, Japan",
        nationality: "Japanese",
        position: "Software Engineer",
        url: "https://github.com",
        attendance_count: 10,
        participatingEvents: [
            {
                event_id: 1,
                title: "Participating Event 1",
                description: "This is a participating event description.",
                image: "/images/top_background.jpg",
            },
            {
                event_id: 2,
                title: "Participating Event 2",
                description: "This is another participating event description.",
                image: "/images/participating_event2.jpg",
            },
        ],
        organizingEvents: [
            {
                event_id: 3,
                title: "Organizing Event 1",
                description: "This is an organizing event description.",
                image: "/images/organizing_event1.jpg",
            },
            {
                event_id: 4,
                title: "Organizing Event 2",
                description: "This is another organizing event description.",
                image: "/images/organizing_event2.jpg",
            },
        ],
    };

    const handleClick = (eventId) => {
        // イベントの詳細ページへの遷移などの処理を追加する
        console.log("Clicked on event with ID:", eventId);
    };

    return (
        <GeneralLayout auth={auth}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-left mt-8 sm:flex-row">
                    <div className="w-full max-w-xl mb-8 sm:mb-0">
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <div className="text-center">
                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 truncate">
                                    {user.name}
                                </h2>
                                <img
                                    src={user.image}
                                    alt="Profile"
                                    className="w-48 h-48 sm:w-64 sm:h-64 mx-auto rounded-full mb-4"
                                />
                            </div>
                            <div className="mb-7">
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
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
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
                                    {user.participatingEvents.map((event) => (
                                        <div
                                            key={event.event_id}
                                            className="w-full sm:w-1/2 md:w-1/3 lg:w-2/4 xl:w-2/4 p-2 flex"
                                            onClick={() =>
                                                handleClick(event.event_id)
                                            }
                                        >
                                            <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:bg-blue-100 w-full">
                                                <div
                                                    className="w-full h-40 bg-cover bg-no-repeat bg-center"
                                                    style={{
                                                        backgroundImage: `url(${event.image})`,
                                                    }}
                                                ></div>
                                                <div className="p-3">
                                                    <h2 className="text-xl font-bold mb-2 truncate">
                                                        {event.title}
                                                    </h2>
                                                    <p className="text-gray-700 translate">
                                                        {event.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mb-4 flex-grow">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
                                    Organizing Events
                                </h3>
                                <div className="flex flex-wrap">
                                    {user.organizingEvents.map((event) => (
                                        <div
                                            key={event.event_id}
                                            className="w-full sm:w-1/2 md:w-1/3 lg:w-2/4 xl:w-2/4 p-2 flex"
                                            onClick={() =>
                                                handleClick(event.event_id)
                                            }
                                        >
                                            <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:bg-blue-100 w-full">
                                                <div
                                                    className="w-full h-40 bg-cover bg-no-repeat bg-center"
                                                    style={{
                                                        backgroundImage: `url(${event.image})`,
                                                    }}
                                                ></div>
                                                <div className="p-2">
                                                    <h2 className="text-xl font-bold mb-2">
                                                        {event.title}
                                                    </h2>
                                                    <p className="text-gray-700">
                                                        {event.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GeneralLayout>
    );
};

export default ProfileDetails;
