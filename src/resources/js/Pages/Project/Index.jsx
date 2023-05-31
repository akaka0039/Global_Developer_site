import React from "react";
import ProjectList from "./ProjectList";
import Header from "@/Components/Header";

function Home() {
    return (
        <div className="flex h-screen flex-col">
            <Header />
            <ProjectList />
        </div>
    );
}

export default Home;
