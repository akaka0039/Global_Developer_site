import React from "react";
import Top_1 from "./Top_1";
import Top_2 from "./Top_2";
import Top_3 from "./Top_3";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import backgroundImg from "/public/images/top_background.jpg";


function Index({ auth }) {
    return (
        <div className="flex flex-col h-screen">
            <Header auth={auth} />
            <section className="px-2 pt-24 pb-16 bg-white md:px-0">
                <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                    <div className="flex flex-wrap items-center sm:-mx-3">
                        <div className="w-full md:w-1/2 md:px-3">
                            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                                    <span className="block text-center text-gray-600">
                                        Global Developer
                                    </span>
                                </h1>
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl">
                                    <span className="block text-primary xl:inline justify-center text-center" data-primary="indigo-600">
                                        Find Global Connection!
                                    </span>
                                </h1>
                                <p className="max-w-xs text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl justify-center text-center">
                                    〜Find Global Connection〜
                                </p>
                                <div className="flex sm:flex-row sm:space-x-4 justify-center">
                                    <a href="/events" className="flex px-6 py-3 mb-3 text-lg text-gray-700 font-medium bg-primary rounded-full sm:mb-0 hover:bg-primary-hover sm:max-w-xs text-center max-w-0.625" data-primary="indigo-600" data-rounded="rounded-md">
                                        Check events
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-7 ml-1 feather feather-arrow-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                                <img src={backgroundImg}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Top_2 />
            <Top_3 />
            <div className="pt-6">
            <Footer />
            </div>
        </div>
    );
}

export default Index;
