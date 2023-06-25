import React, { useState } from "react";

export default function FlashMessage({ flash }) {
    const [isFlashVisible, setFlashVisible] = useState(true);

    const handleCloseFlash = () => {
        setFlashVisible(false);
    };
    return (
        <div className="flex-grow">
            {isFlashVisible && flash.message && (
                <div
                    className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-1 rounded text-center"
                    role="alert"
                >
                    <div className="flex p-2">
                        <span className="flex-grow">{flash.message}</span>
                        <span className="flex justify-end px-4 items-start">
                            <svg
                                onClick={() => handleCloseFlash()}
                                className="fill-current h-6 w-6 text-blue-500"
                                role="button"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <title>Close</title>
                                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                            </svg>
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}
