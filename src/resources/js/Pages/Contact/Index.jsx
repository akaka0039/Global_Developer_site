import React, { useState } from "react";
import { router } from "@inertiajs/react";

const ContactPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("coming soon");

        // here to send data to backend
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="flex justify-center items-center px-4 py-8">
            <div className="lg:w-1/4 w-3/4">
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

                <div className="mb-4">
                    <label htmlFor="name" className="block font-medium mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-medium mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block font-medium mb-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    ></textarea>
                </div>
                <div className="flex justify-end">
                    <button
                        id="back-button"
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded  focus:outline-none focus:shadow-outline"
                        onClick={() => {
                            router.visit("/events");
                        }}
                    >
                        Back
                    </button>
                    <button
                        type="button"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
