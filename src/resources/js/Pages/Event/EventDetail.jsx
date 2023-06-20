import React, { useRef, useState } from "react";
import { router } from "@inertiajs/react";
import GeneralLayout from "@/Layouts/GeneralLayout";
import MemberPopup from "./EventFormComponents/MemberPopup";
import axios from "axios";

const EventDetail = ({
    auth,
    event,
    is_attended,
    participants,
    tags,
    wait_list,
}) => {
    // for debug
    console.log(event, is_attended, participants, tags, wait_list);

    const [isAttended, SetIsAttended] = useState(is_attended);
    const [participantsState, SetParticipantsState] = useState(participants);
    const [waitListState, SetWaitListState] = useState(wait_list);
    const isFullyOccupied =
        participantsState.length >= event.participant_limit_number;
    const [showAttendance, setShowAttendance] = useState(false);
    const [showWaitList, setShowWaitList] = useState(false);
    const attendClickProcessing = useRef(false);

    const handleEditClick = () => {
        router.get(`/events/${event.event_id}/edit`);
    };

    const handleAttendClick = async () => {
        const response = await axios.post(
            `/events/${event.event_id}/participants`,
            { user_id: auth?.user?.user_id }
        );
        if (response?.data?.is_attended) {
            SetIsAttended(true);
        }
        if (response?.data?.participants) {
            SetParticipantsState(response?.data?.participants);
        }
        if (response?.data?.wait_list) {
            SetWaitListState(response?.data?.wait_list);
        }

        attendClickProcessing.current = false;
    };

    const handleNotAttendClick = async () => {
        const response = await axios.delete(
            `/events/${event.event_id}/participants`,
            { user_id: auth?.user?.user_id }
        );
        if (!response?.data?.is_attended) {
            SetIsAttended(false);
        }
        if (response?.data?.participants) {
            SetParticipantsState(response?.data?.participants);
        }
        if (response?.data?.wait_list) {
            SetWaitListState(response?.data?.wait_list);
        }

        attendClickProcessing.current = false;
    };

    console.log(waitListState);

    const handleAttendanceClick = () => {
        setShowAttendance(true);
    };

    const handleModalClose = () => {
        setShowAttendance(false);
        setShowWaitList(false);
    };
    const handleWaitListClick = () => {
        setShowWaitList(true);
    };
    return (
        <GeneralLayout auth={auth}>
            <div className="flex flex-col justify-center items-center h-full pt-8 pb-6">
                <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow sm:rounded-lg">
                        <div className="h-screen max-h-96 sm:max-h-72 flex items-center">
                            <div
                                className={`flex bg-center bg-cover bg-no-repeat border object-contain rounded-md border-gray-200`}
                                style={{
                                    backgroundImage: `url(/storage/images/${event.image})`,
                                    width: "100%",
                                    height: "100%",
                                }}
                            ></div>
                        </div>
                        <div className="flex px-3 py-8 sm:px-10">
                            <div className="flex flex-col w-full">
                                <div className="flex flex-row items-center justify-between mb-4">
                                    <h1 className="text-4xl leading-8 font-bold text-gray-900">
                                        {event.name}
                                    </h1>
                                </div>
                                <p className="text-md text-gray-600 mb-2">
                                    Start: {event.start_date}
                                </p>
                                <p className="text-md text-gray-600 mb-2">
                                    End: {event.end_date}
                                </p>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">
                                        {event.is_online === 0
                                            ? "Location"
                                            : "Online Event"}
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        <div className="flex items-center">
                                            <span>{event.address}</span>
                                            <button
                                                className="ml-2 p-1 rounded-md bg-gray-200 hover:bg-gray-300 focus:bg-gray-300"
                                                onClick={() => {
                                                    navigator.clipboard.writeText(
                                                        event.address
                                                    );
                                                    alert(
                                                        "Copied to clipboard"
                                                    );
                                                }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.0"
                                                    stroke="currentColor"
                                                    className="w-4 h-4"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </dd>
                                </div>

                                <div className="sm:col-span-1 ">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Limit of Attendance
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        {participantsState.length}/
                                        {event.participant_limit_number}
                                        {participantsState &&
                                            participantsState.length > 0 && (
                                                <button
                                                    className="text-blue-500 ml-2 hover:underline"
                                                    onClick={
                                                        handleAttendanceClick
                                                    }
                                                >
                                                    show attendance
                                                </button>
                                            )}
                                    </dd>
                                    {showAttendance && (
                                        <MemberPopup
                                            Members={participantsState}
                                            handleModalClose={handleModalClose}
                                            title="Attendance List"
                                        />
                                    )}
                                    <dt className="text-sm font-medium text-gray-500 pt-3">
                                        Number of people waiting
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        {waitListState.length}
                                        {waitListState &&
                                            waitListState.length > 0 && (
                                                <button
                                                    className="text-blue-500 ml-5 hover:underline"
                                                    onClick={
                                                        handleWaitListClick
                                                    }
                                                >
                                                    show waitList
                                                </button>
                                            )}
                                    </dd>
                                    {showWaitList && (
                                        <MemberPopup
                                            Members={waitListState}
                                            handleModalClose={handleModalClose}
                                            title="Wait List"
                                        />
                                    )}
                                </div>
                                <div className="sm:col-span-2">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Description
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        {event.description}
                                    </dd>
                                </div>
                                <div className="sm:col-span-2">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Tag
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        {tags &&
                                            tags.map((tag) => (
                                                <button
                                                    key={tag.id}
                                                    className="bg-gray-300 hover:bg-gray-600 text-white font-bold py-1 px-3 rounded mt-2 ml-4"
                                                >
                                                    {tag.name.en}
                                                </button>
                                            ))}
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

                            {isFullyOccupied && !isAttended && (
                                <div className="pl-2">
                                    <button
                                        onClick={handleAttendClick}
                                        className="bg-orange-500 text-white rounded-md px-4 py-2 transition duration-300 ease-in-out hover:bg-orange-600"
                                    >
                                        Waitlist
                                    </button>
                                </div>
                            )}
                            {!isFullyOccupied && !isAttended && (
                                <div className="pl-2">
                                    <button
                                        onClick={handleAttendClick}
                                        className="bg-blue-500 text-white rounded-md px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-600"
                                    >
                                        Attend
                                    </button>
                                </div>
                            )}
                            {isAttended && (
                                <div className="pl-2">
                                    <button
                                        onClick={handleNotAttendClick}
                                        className="bg-red-500 text-white rounded-md px-4 py-2 transition duration-300 ease-in-out hover:bg-red-600"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            )}
                            <div className="pl-2">
                                <button
                                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded "
                                    onClick={handleEditClick}
                                >
                                    Edit
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
