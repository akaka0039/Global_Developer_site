import React from "react";
import Top_1 from "./Top_1";
import Top_2 from "./Top_2";
import Top_3 from "./Top_3";
import Header from "@/Components/Header";
import Footer from "@/Components/footer";

function Index() {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <Top_1 />
            <Top_2 />
            <Top_3 />
            <div className="pt-6">
                <Footer />
            </div>
        </div>
    );
}

export default Index;
