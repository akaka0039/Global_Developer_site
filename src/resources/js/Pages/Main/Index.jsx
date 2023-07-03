import React, { useState } from "react";
import MainCard from "./MainCard";
import Card from "./Card";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { router } from "@inertiajs/react";
import FlashMessage from "@/Components/FlashMessage";
import Button from "@/Components/Button";

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
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-600 pt-10 font-extrabold tracking-tight">
                            Global Developer
                        </h1>
                        <p className="text-base text-gray-500 text-xl mt-4 sm:mt-6">
                            ~ Based On Your Participation ~
                        </p>
                        <div className="px-4 py-8 text-center items-center sm:px-6">
                            <a href="/events/create">
                                <Button className="px-12 py-4 text-xl">
                                    Create
                                </Button>
                            </a>
                        </div>
                        <div>
                            <button type="button" className="hs-collapse-toggle inline-flex items-center justify-center border-gray-600 border px-5 py-2.5 text-sm font-medium tracking-wide transition-colors duration-100 rounded-full text-gray-500 bg-neutral-50 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-100 hover:text-neutral-600 hover:bg-neutral-100" id="hs-basic-collapse" data-hs-collapse="#hs-basic-collapse-heading">
                                <div className="pr-3">
                                    Filter by Tag
                                </div>
                                <svg className="hs-collapse-open:rotate-180 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </button>
                            <div id="hs-basic-collapse-heading" className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-collapse">
                                <div className="mt-5">
                                    <div className="text-gray-500 dark:text-gray-400">
                                        <div className="container mx-auto">
                                            <div className="px-4 py-8 text-center items-center sm:px-6">
                                                {tags.map((tag) => (
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center justify-center border-gray-600 border px-5 py-2.5 text-sm font-medium tracking-wide transition-colors duration-100 rounded-full text-gray-500 bg-neutral-50 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-100 hover:text-neutral-600 hover:bg-neutral-100 mr-2 mb-2"
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
                            </div>
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
