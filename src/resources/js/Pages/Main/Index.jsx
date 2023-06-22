import React, { useState } from "react";
import MainCard from "./MainCard";
import Card from "./Card";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { router } from "@inertiajs/react";

function Index({ auth, events, flash, tags }) {
    const [isFlashVisible, setFlashVisible] = useState(true);

    const handleCloseFlash = () => {
        setFlashVisible(false);
    };

    const handleTagButton = (tagName) => {
        router.get(`/events?tag_name=${tagName}`);
    };

    return (
        <div className="flex h-screen flex-col">
            <Header auth={auth} />
            <div>
                {isFlashVisible && flash.message && (
                    <div
                        className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative text-center"
                        role="alert"
                    >
                        <span className="block sm:inline">{flash.message}</span>
                        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <svg
                                onClick={handleCloseFlash}
                                className="fill-current h-6 w-6 text-blue-500"
                                role="button"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <title>Close</title>
                                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                            </svg>
                        </span>
                    </div>
                )}
            </div>
            <div className="flex flex-col items-center md:flex-row pt-16 px-2">
                <MainCard
                    imageUrl="/images/top_background.jpg"
                    title="Example Card"
                    description="This is an example card description."
                />
                <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black-100 pt-10">
                            Global Developer
                        </h1>
                        <p className="text-balck-100 mt-4 sm:mt-6">
                            ~ based on your participation ~
                        </p>
                        <div className="px-4 py-8 text-center items-center sm:px-6">
                            <a href="/events/create">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-6 px-10  border border-transparent shadow-sm text-xl font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Create
                                </button>
                            </a>
                        </div>
                        {/* temporary design */}
                        <div className="px-4 py-8 text-center items-center sm:px-6">
                            {tags.map((tag) => (
                                <button
                                    type="button"
                                    className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                                    onClick={() => { handleTagButton(tag.name.en) }}
                                >
                                    {tag.name.en}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center items-center pt-4 pb-5">
                {events.map((event) => (
                    <Card key={event.event_id} event={event} />
                ))}
            </div>
            <div className="md-2">
                <Footer />
            </div>
        </div>
    );
}

export default Index;
