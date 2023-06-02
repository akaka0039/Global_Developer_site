import React from "react";

const members = [
    {
        id: 1,
        name: "John Doe",
        role: "Developer",
        image: "/images/top_background.jpg",
        introduction:
            "I'm a passionate developer with expertise in frontend technologies. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 2,
        name: "Jane Smith",
        role: "Designer",
        image: "/images/top_background.jpg",
        introduction:
            "I'm a creative designer who loves crafting beautiful user experiences. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    // Add more member objects as needed
];

const MemberList = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {members.map((member) => (
                <div key={member.id} className="p-2">
                    <div className="bg-white rounded-lg shadow-lg p-4 h-full flex flex-col">
                        <div className="aspect-w-3 aspect-h-4 mb-4">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col flex-grow">
                            <h2 className="text-lg font-bold mb-2">
                                {member.name}
                            </h2>
                            <p className="text-gray-500 mb-2">{member.role}</p>
                            <div className="text-gray-700 overflow-hidden line-clamp-3">
                                {member.introduction}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MemberList;
