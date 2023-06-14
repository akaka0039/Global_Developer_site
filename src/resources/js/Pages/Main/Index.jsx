import React from "react";
import MainCard from "./MainCard";
import Card from "./Card";
import GeneralLayout from "@/Layouts/GeneralLayout";
import Header from "@/Components/Header";
import Footer from "@/Components/footer";

function Index({ auth, events, flash }) {
    // mock data 2023/06/12
    auth = "";
    const [isFlashVisible, setFlashVisible] = React.useState(true);

    const handleCloseFlash = () => {
        setFlashVisible(false);
    };

    return (
        // <GeneralLayout auth={auth}>
        <div className="flex h-screen flex-col">
            <Header auth={auth} />
            <div>
                {isFlashVisible && flash.message && (
                    <div class="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative text-center" role="alert">
                        <span class="block sm:inline">{flash.message}</span>
                        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <svg onClick={handleCloseFlash} class="fill-current h-6 w-6 text-blue-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <title>Close</title>
                                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                            </svg>
                        </span>
                    </div>)}
            </div>
            <div className="flex flex-col items-center md:flex-row pt-16 px-2">
                <MainCard
                    imageUrl="/images/top_background.jpg"
                    title="Example Card"
                    description="This is an example card description."
                />
                <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black-100">
                            Global Developer
                        </h1>
                        <p className="text-balck-100 mt-4 sm:mt-6">
                            ~ based on your participation ~
                        </p>
                    </div>
                </div>
            </div>
            <p className="text-right text-black-100 mt-2 pt-8 pr-5">
                ＞＞＞ Check All Events
            </p>

            <div className="flex flex-wrap justify-center items-center pt-4 pb-5">
                {events.map((event) => (
                    <Card key={event.event_id} event={event} />
                ))}
            </div>
            <div className="md-2">
                <Footer />
            </div>
        </div>
        // </GeneralLayout>
    );
}

export default Index;
