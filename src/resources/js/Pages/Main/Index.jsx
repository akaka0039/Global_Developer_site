import React, { useState } from "react";
import MainCard from "./MainCard";
import Card from "./Card";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { router } from "@inertiajs/react";
import FlashMessage from "@/Components/FlashMessage";

function Index({ auth, events, flash, tags }) {
    const handleCloseFlash = () => {
        setFlashVisible(false);
    };

    const handleTagButton = (tagName) => {
        router.get(`/events?tag_name=${tagName}`);
    };

    return (
        <div className="flex h-screen flex-col">
            <Header auth={auth} />
            <FlashMessage flash={flash} />
            <div className="flex flex-col items-center md:flex-row pt-8 px-2">
                {events[0] && <MainCard className="pb-10" event={events[0]} />}
                <div className="max-w-full md:max-w-8/12 lg:max-w-6/12 xl:max-w-6/12 mx-auto flex items-center justify-center">
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
                        <div className="px-4 py-8 text-center items-center sm:px-6">
                            {tags.map((tag) => (
                                <button
                                    type="button"
                                    className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                                    key={tag.id}
                                    onClick={() => {
                                        handleTagButton(tag.name.en);
                                    }}
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
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    );
}

export default Index;
