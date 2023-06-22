import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { Link, router } from "@inertiajs/react";
import React, { useState } from "react";

export default function ProfileEdit({
    auth,
    mustVerifyEmail,
    status,
    errors,
    flash,
}) {
    const [isFlashVisible, setFlashVisible] = useState(true);
    const [name, setName] = useState(auth.user.name);
    const [email, setEmail] = useState(auth.user.email);
    const [introduction, setIntroduction] = useState(
        auth.user.introduction || ""
    );
    const [nationality, setNationality] = useState(auth.user.nationality);
    const [habitation, setHabitation] = useState(auth.user.habitation);
    const [url, setUrl] = useState(auth.user.url);
    const [image, setImage] = useState(false);
    const [imageUrl, setImageUrl] = useState(
        `storage/images/${auth.user.image}`
    );
    const handleCloseFlash = () => {
        setFlashVisible(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        setImage(file);
        setImageUrl(URL.createObjectURL(file));
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        // Add drag over styles if needed
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        // Remove drag over styles if needed
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
        setImageUrl(URL.createObjectURL(file));
    };

    console.log(errors);
    const submit = (e) => {
        e.preventDefault();
        const data = {
            user_id: auth.user.user_id,
            name: name,
            email: email,
            image: image,
            image_name: auth?.user?.image,
            introduction: introduction,
            habitation: habitation,
            nationality: nationality,
            url: url,
        };
        router.post("profile", {
            _method: 'put',
            ...data
        })
    };

    return (
        <>
            <div>
                {isFlashVisible && flash.message && (
                    <div
                        className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative text-center"
                        role="alert"
                    >
                        <span className="block sm:inline">{flash.message}</span>
                        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <svg
                                onClick={handleCloseFlash}
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
                )}
            </div>
            <div className="flex justify-center items-center">
                <div className="w-9/12 pt-46">
                    <h2 className="text-xl text-gray-900">
                        Profile Information
                    </h2>
                    <p className="mt-1 text-sm text-gray-600">
                        Update your account's profile information
                    </p>

                    <div className="mt-6 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-1">
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="image"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Image
                                    </label>
                                    {imageUrl && (
                                        <div className="mt-2 h-72">
                                            <img
                                                src={imageUrl}
                                                alt="user image"
                                                className="h-full w-full object-contain rounded"
                                            />
                                        </div>
                                    )}
                                    <div
                                        className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                                        onDrop={handleDrop}
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                    >
                                        <div className="space-y-1 text-center">
                                            <div className="flex text-sm text-gray-600">
                                                <label
                                                    htmlFor="image"
                                                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                                                >
                                                    <span>Select Image</span>
                                                    <input
                                                        id="image"
                                                        name="image"
                                                        type="file"
                                                        className="sr-only"
                                                        onChange={
                                                            handleImageChange
                                                        }
                                                    />
                                                </label>
                                                <p className="pl-1">
                                                    or drag &amp; drop
                                                </p>
                                            </div>
                                            <p className="text-xs text-gray-500">
                                                PNG, JPG, GIF Max size: 5MB
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-1">
                                <div className="md:col-span-1">
                                    <div>
                                        <InputLabel htmlFor="name">
                                            Name
                                        </InputLabel>
                                        <input
                                            id="name"
                                            type="text"
                                            className="mt-1 block w-full rounded-md"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            required
                                            autoComplete="name"
                                        />
                                        <InputError
                                            className="mt-2"
                                            message={errors.name}
                                        />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="email">
                                            Email
                                        </InputLabel>
                                        <input
                                            id="email"
                                            type="email"
                                            className="mt-1 block w-full rounded-md"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            required
                                            autoComplete="email"
                                        />
                                        <InputError
                                            className="mt-2"
                                            message={errors.email}
                                        />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="introduction">
                                            Introduction
                                        </InputLabel>
                                        <textarea
                                            id="introduction"
                                            className="mt-1 h-64 block w-full rounded-md"
                                            value={introduction}
                                            onChange={(e) =>
                                                setIntroduction(e.target.value)
                                            }
                                            autoComplete="off"
                                        />
                                        <InputError
                                            className="mt-2"
                                            message={errors.introduction}
                                        />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="habitation">
                                            Habitation
                                        </InputLabel>
                                        <input
                                            id="habitation"
                                            type="text"
                                            className="mt-1 block w-full rounded-md"
                                            value={habitation}
                                            onChange={(e) =>
                                                setHabitation(e.target.value)
                                            }
                                            autoComplete="off"
                                        />
                                        <InputError
                                            className="mt-2"
                                            message={errors.habitation}
                                        />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="nationality">
                                            Nationality
                                        </InputLabel>
                                        <input
                                            id="nationality"
                                            type="text"
                                            className="mt-1 block w-full rounded-md"
                                            value={nationality}
                                            onChange={(e) =>
                                                setNationality(e.target.value)
                                            }
                                            autoComplete="nationality"
                                        />
                                        <InputError
                                            className="mt-2"
                                            message={errors.nationality}
                                        />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="url">
                                            URL
                                        </InputLabel>
                                        <input
                                            id="url"
                                            type="text"
                                            className="mt-1 block w-full rounded-md"
                                            value={url}
                                            onChange={(e) =>
                                                setUrl(e.target.value)
                                            }
                                            autoComplete="off"
                                        />
                                        <InputError
                                            className="mt-2"
                                            message={errors.url}
                                        />
                                    </div>

                                    {mustVerifyEmail &&
                                        auth.user.email_verified_at ===
                                            null && (
                                            <div>
                                                <p className="text-sm mt-2 text-gray-800">
                                                    Your email address is
                                                    unverified.
                                                    <Link
                                                        href={route(
                                                            "verification.send"
                                                        )}
                                                        method="post"
                                                        as="button"
                                                        className="underline text-sm ml-3 text-gray-600 hover:text-gray-900"
                                                        preserveScroll
                                                    >
                                                        Click here to request a
                                                        verification email.
                                                    </Link>
                                                </p>
                                                {status ===
                                                    "verification-link-sent" && (
                                                    <div className="mt-2 font-medium text-sm text-green-600">
                                                        A new verification link
                                                        has been sent to your
                                                        email address.
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                    <div className="mt-2 flex flex-col items-end">
                                        <div className="flex">
                                            <button
                                                onClick={submit}
                                                className="py-3 px-7 mr-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
