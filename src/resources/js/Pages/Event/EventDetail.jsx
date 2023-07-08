import React, { useRef, useState } from "react";
import { router } from "@inertiajs/react";
import MemberPopup from "./EventFormComponents/MemberPopup";
import axios from "axios";
import Button from "@/Components/Button";

const EventDetail = ({
    auth,
    event,
    is_attended,
    is_hosted,
    host_user,
    participants,
    tags,
    wait_list,
}) => {
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

    const handleTagButton = (tagName) => {
        router.get(`/events?tag_name=${tagName}`);
    };

    const handleAttendClick = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (attendClickProcessing.current) return;
        attendClickProcessing.current = true;

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

    const handleNotAttendClick = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (attendClickProcessing.current) return;
        attendClickProcessing.current = true;

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

    const handleCopyAddress = async (address) => {
        try {
            await navigator.clipboard.writeText(address);
            const alertMessage = document.createElement("div");
            alertMessage.textContent = "Copied to clipboard";
            alertMessage.style.position = "fixed";
            alertMessage.style.top = "10px";
            alertMessage.style.left = "50%";
            alertMessage.style.transform = "translateX(-50%)";
            alertMessage.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            alertMessage.style.color = "white";
            alertMessage.style.padding = "10px";
            alertMessage.style.borderRadius = "4px";
            alertMessage.style.zIndex = "9999";
            document.body.appendChild(alertMessage);

            setTimeout(() => {
                document.body.removeChild(alertMessage);
            }, 3000);
        } catch (error) {
            console.error("Error copying address to clipboard:", error);
        }
    };

    const adjustDate = (value) => {
        const date = new Date(value);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hour = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");

        return `${year}-${month}-${day} ${hour}:${minutes}`;
    };

    return (
        <div className="flex flex-col justify-center items-center h-full pt-8 pb-6">
            <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow sm:rounded-lg">
                    <div className="h-screen max-h-96 sm:max-h-72 flex items-center">
                        <div
                            className="flex bg-center bg-cover bg-no-repeat border object-contain rounded-md border-gray-200"
                            style={{
                                backgroundImage: `url(/storage/images/${event.image})`,
                                width: "100%",
                                height: "100%",
                            }}
                        ></div>
                    </div>
                    <div className="flex px-3 py-8 sm:px-10">
                        <div className="flex flex-col">
                            <div className="flex mb-4">
                                <h1 className="text-4xl leading-8 font-bold text-gray-600 mb-4">
                                    {event.name}
                                </h1>
                                <div className="text-lg text-gray-600 ml-4 mt-3">
                                    hosted by{" "}
                                    {host_user?.name || "Deleted user"}
                                </div>
                            </div>
                            <p className="text-lg text-gray-600 mb-2">
                                Start: {adjustDate(event.start_date)}
                            </p>
                            <p className="text-lg text-gray-600 mb-2">
                                End&nbsp; : {adjustDate(event.end_date)}
                            </p>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                            <div className="sm:col-span-1">
                                <dt className="text-lg font-bold text-gray-600">
                                    {event.is_online === 0
                                        ? "Location"
                                        : "Online Event"}
                                </dt>
                                <dd className="mt-1 text-lg text-gray-600">
                                    <div className="flex items-center">
                                        <span className="truncate">
                                            {event.address}
                                        </span>
                                        <button
                                            className="ml-2 p-1 rounded-md bg-gray-200 hover:bg-gray-300 focus:bg-gray-300"
                                            onClick={() => {
                                                handleCopyAddress(
                                                    event.address
                                                );
                                            }}
                                        >
                                            <i className="fa-solid fa-copy"></i>
                                        </button>
                                    </div>
                                </dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-lg font-bold text-gray-600">
                                    Limit of Attendance
                                </dt>
                                <dd className="mt-1 text-md text-gray-600">
                                    {participantsState.length}/
                                    {event.participant_limit_number}
                                    {participantsState &&
                                        participantsState.length > 0 && (
                                            <button
                                                className="text-blue-500 ml-2 hover:underline"
                                                onClick={handleAttendanceClick}
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
                                <dt className="text-lg font-bold text-gray-600 pt-3">
                                    Number of people waiting
                                </dt>
                                <dd className="mt-1 text-md text-gray-600">
                                    {waitListState.length}
                                    {waitListState &&
                                        waitListState.length > 0 && (
                                            <button
                                                className="text-blue-500 ml-5 hover:underline"
                                                onClick={handleWaitListClick}
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
                                <dt className="text-lg font-bold text-gray-600">
                                    Description
                                </dt>
                                <dd className="mt-1 text-lg text-gray-600">
                                    {event.description}
                                </dd>
                            </div>
                            <div className="sm:col-span-2">
                                <dt className="text-lg font-bold text-gray-600">
                                    Tag
                                </dt>
                                <dd className="mt-1 text-md text-gray-600">
                                    {tags &&
                                        tags.map((tag) => (
                                            <span key={tag.id} className="mr-2">
                                                <Button
                                                    colorSet={{
                                                        bg_color:
                                                            "bg-transparent",
                                                        bg_hover:
                                                            "hover:bg-transparent",
                                                        text_color:
                                                            "bg-gray-500",
                                                        text_hover:
                                                            "hover:bg-neutral-100",
                                                    }}
                                                    onClick={() => {
                                                        handleTagButton(
                                                            tag.name.en
                                                        );
                                                    }}
                                                >
                                                    {tag.name.en}
                                                </Button>
                                            </span>
                                        ))}
                                    {tags.length === 0 &&
                                        "No tags attached to this event."}
                                </dd>
                            </div>
                        </dl>
                    </div>

                    <div className="bg-gray-100 px-4 py-4 sm:px-6 flex justify-end">
                        <div className="pl-2">
                            <a href="/events">
                                <Button
                                    colorSet={{
                                        bg_color: "bg-gray-500",
                                        bg_hover: "hover:bg-gray-600",
                                    }}
                                    className="px-6"
                                >
                                    Back
                                </Button>
                            </a>
                        </div>

                        {!is_hosted &&
                            isFullyOccupied &&
                            !isAttended &&
                            auth.user && (
                                <div className="ml-2">
                                    <Button
                                        colorSet={{
                                            bg_color: "bg-warm",
                                            bg_hover: "hover:bg-warm-hover",
                                        }}
                                        onClick={handleAttendClick}
                                    >
                                        Waitlist
                                    </Button>
                                </div>
                            )}
                        {!is_hosted &&
                            !isFullyOccupied &&
                            !isAttended &&
                            auth.user && (
                                <div className="ml-2">
                                    <Button onClick={handleAttendClick}>
                                        Attend
                                    </Button>
                                </div>
                            )}
                        {!is_hosted && isAttended && auth.user && (
                            <div className="ml-2">
                                <Button
                                    colorSet={{
                                        bg_color: "bg-danger",
                                        bg_hover: "hover:bg-danger-hover",
                                    }}
                                    onClick={handleNotAttendClick}
                                >
                                    Cancel
                                </Button>
                            </div>
                        )}
                        {!is_hosted && isFullyOccupied && !auth.user && (
                            <a href="/login">
                                <div className="ml-2">
                                    <Button
                                        colorSet={{
                                            bg_color: "bg-warm",
                                            bg_hover: "hover:bg-warm-hover",
                                        }}
                                    >
                                        Waitlist
                                    </Button>
                                </div>
                            </a>
                        )}
                        {!is_hosted && !isFullyOccupied && !auth.user && (
                            <a href="/login">
                                <div className="ml-2">
                                    <Button>Attend</Button>
                                </div>
                            </a>
                        )}
                        {is_hosted && (
                            <div className="ml-2">
                                <Button
                                    colorSet={{
                                        bg_color: "bg-secondary",
                                        bg_hover: "hover:bg-secondary-hover",
                                    }}
                                    className="px-6"
                                    onClick={handleEditClick}
                                >
                                    Edit
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetail;
