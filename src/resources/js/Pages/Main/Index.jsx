import React from "react";
import MainCard from "./MainCard";
import Card from "./Card";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

function Index({ auth, events }) {
    return (
        <div className="flex h-screen flex-col">
            <Header auth={auth} />
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
