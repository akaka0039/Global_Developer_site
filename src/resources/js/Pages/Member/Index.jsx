import React from "react";
import MemberList from "./MemberList";
import Header from "../../Components/Header";

function Index() {
    return (
        <div className="flex h-screen flex-col">
            <Header />
            <div className="flex-grow bg-gray-100 p-4">
                <MemberList />
            </div>
        </div>
    );
}

export default Index;
