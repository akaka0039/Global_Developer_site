import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import GeneralLayout from "@/Layouts/GeneralLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link, router } from "@inertiajs/react";
import React, { useState } from "react";

export default function ProfileEdit({ auth, mustVerifyEmail, status, errors }) {
    const [name, setName] = useState(auth.user.name);
    const [email, setEmail] = useState(auth.user.email);
    const [introduction, setIntroduction] = useState(
        auth.user.introduction || ""
    );
    console.log(mustVerifyEmail);
    const [nationality, setNationality] = useState(auth.user.nationality);
    const [habitation, setHabitation] = useState(auth.user.habitation);
    const [url, setUrl] = useState(auth.user.url);
    const [image, setImage] = useState(false);
    const [imageUrl, setImageUrl] = useState(
        `storage/images/${auth.user.image}`
    );

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

    const submit = (e) => {
        e.preventDefault();
        const data = {
            user_id: auth.user.user_id,
            name: name,
            email: email,
            image: image,
            introduction: introduction,
            habitation: habitation,
            nationality: nationality,
            url: url,
        };
        router.post("profile", data);
    };

    return (
        <GeneralLayout auth={auth}>
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

                                    <div className="mt-2">
                                        <PrimaryButton onClick={submit}>
                                            Save
                                        </PrimaryButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GeneralLayout>
    );
}
