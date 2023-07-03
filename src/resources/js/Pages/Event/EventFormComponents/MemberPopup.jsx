import React, { useRef, useEffect } from "react";
import { router, usePage } from "@inertiajs/react";
import Button from "@/Components/Button";

const MemberPopup = ({ Members, handleModalClose, title }) => {
    const handleClick = (userId) => {
        router.get(`/profile/${userId}`);
    };

    const handleInnerClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 bg-gray-900"
            onClick={handleModalClose}
        >
            <div
                className="bg-white p-4 rounded-lg max-w-xl w-full max-h-[500px] overflow-y-auto"
                onClick={handleInnerClick}
            >
                <h2 className="text-lg font-semibold mb-4">{title}</h2>
                {Members &&
                    Members.map((Member) => (
                        <div
                            key={Member.user_id}
                            className="flex items-center hover:bg-gray-400 text-lg border-solid bg-gray-300 text-black font-bold py-3 px-4 rounded mt-5"
                            onClick={() => handleClick(Member.user_id)}
                        >
                            <div
                                className="w-14 h-14 rounded-full bg-gray-400 mr-4"
                                style={{
                                    backgroundImage: `url(/storage/images/${Member.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            ></div>
                            <div className="truncated">{Member.name}</div>
                        </div>
                    ))}
                <Button
                  onClick={handleModalClose}
                  className="float-right mt-4"
                >
                    Close
                </Button>
            </div>
        </div>
    );
};

export default MemberPopup;
