import React from "react";

const projects = [
    {
        id: 1,
        name: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        status: "In Progress",
        stars: 10,
        forks: 5,
        image: "/images/top_background.jpg",
    },
    {
        id: 2,
        name: "Project 2",
        description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        status: "Completed",
        stars: 20,
        forks: 8,
        image: "/images/top_background.jpg",
    },
    // Add more projects as needed
];

const ProjectList = () => {
    return (
        <div className="flex flex-wrap -mx-4">
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
                >
                    <div className="bg-white rounded-lg shadow-lg p-4 h-full flex flex-col">
                        <div className="aspect-w-16 aspect-h-9 mb-4">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <h2 className="text-lg font-bold mb-2">
                            {project.name}
                        </h2>
                        <p className="text-gray-500 mb-2 line-clamp-3">
                            {project.description}
                        </p>
                        <p className="text-gray-500 mb-2">
                            Status: {project.status}
                        </p>
                        <div className="flex items-center text-gray-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            ></svg>
                            {project.stars} Stars
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 ml-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            ></svg>
                            {project.forks} Forks
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
