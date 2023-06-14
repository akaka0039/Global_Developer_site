import React, { useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function GeneralLayout({ auth, children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-1">
                <Header auth={auth} />
            </div>
            <div className="flex-1 pb-8">{children}</div>
            <div className="flex-1 pt-4">
                <Footer />
            </div>
        </div>
    );
}
