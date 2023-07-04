import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { Link, router } from "@inertiajs/react";
import React, { useState } from "react";
import FlashMessage from "@/Components/FlashMessage";
import Button from "@/Components/Button";

export default function ProfileEdit({
    auth,
    mustVerifyEmail,
    status,
    errors,
    flash,
}) {
    const [name, setName] = useState(auth.user.name);
    const [email, setEmail] = useState(auth.user.email);
    const [position, setPosition] = useState(auth.user.position || "");
    const [introduction, setIntroduction] = useState(
        auth.user.introduction || ""
    );
    const [nationality, setNationality] = useState(auth.user.nationality || "");
    const [habitation, setHabitation] = useState(auth.user.habitation || "");
    const [url, setUrl] = useState(auth.user.url || "");
    const [image, setImage] = useState(
        auth.user.image ? `${auth.user.image}` : ""
    );
    const [imageUrl, setImageUrl] = useState(
        auth.user.image ? `/storage/images/${auth.user.image}` : ""
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

    const handleCancelImage = () => {
        if (
            window.confirm(
                "Are you sure you want to cancel the image selection?"
            )
        ) {
            setImage(null);
            setImageUrl(null);
        }
    };

    const submit = (e) => {
        e.preventDefault();
        const data = {
            user_id: auth.user.user_id,
            name: name,
            email: email,
            image: image,
            position: position,
            image_name: auth?.user?.image,
            introduction: introduction,
            habitation: habitation,
            nationality: nationality,
            url: url,
        };
        router.post("profile", {
            _method: "put",
            ...data,
        });
    };

    return (
        <>
            <div>
                <FlashMessage flash={flash} />
            </div>
            <div className="flex justify-center items-center pt-3">
                <div className="w-full lg:w-2/3 xl:w-2/ 3 pt-4">
                    <h1 className="text-4xl text-gray-600">
                        Edit Profile
                    </h1>
                    <p className="mt-2 text-md text-gray-600">
                        This information will appear on your public profile
                    </p>

                    <div className="mt-4 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-lg font-medium text-gray-600"
                                    >
                                        Name
                                        <span className="text-red-500"> *</span>
                                    </label>
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
                                    <label
                                        htmlFor="email"
                                        className="block text-lg font-medium text-gray-600"
                                    >
                                        Email
                                        <span className="text-red-500"> *</span>
                                    </label>
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
                                    <label
                                            htmlFor="image"
                                            className="block text-lg font-medium text-gray-600"
                                        >
                                            Image
                                    </label>

                                    <div
                                        onDrop={handleDrop}
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                    >
                                        {imageUrl && (
                                            <div className="mt-1 h-72">
                                                <img
                                                    src={imageUrl}
                                                    alt="user image"
                                                    className="h-full w-full object-cover rounded"
                                                />
                                            </div>
                                        )}
                                        <div className="flex justify-center pt-1">
                                            <div className="border-2 border-gray-300 border-dashed rounded-m py-8 w-full">
                                                <div className="space-y-1 text-center">
                                                    <div className="text-lg text-gray-600 flex flex-row justify-center">
                                                        <label
                                                            htmlFor="image"
                                                            className="relative cursor-pointer bg-white rounded-md font-medium text-blue-500 hover:text-blue-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                                                        >
                                                            <span>
                                                                Select Image
                                                            </span>
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
                                                    {imageUrl && (
                                                        <button
                                                            className="text-xs text-red-500 underline mt-2"
                                                            onClick={
                                                                handleCancelImage
                                                            }
                                                        >
                                                            Delete Image
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <label
                                        htmlFor="position"
                                        className="block text-lg font-medium text-gray-600"
                                    >
                                        Position
                                    </label>
                                    <input
                                        id="position"
                                        type="text"
                                        className="mt-1 block w-full rounded-md"
                                        value={position}
                                        onChange={(e) =>
                                            setPosition(e.target.value)
                                        }
                                        autoComplete="off"
                                    />
                                    <InputError
                                        className="mt-2"
                                        message={errors.position}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="introduction"
                                        className="block text-lg font-medium text-gray-600"
                                    >
                                        Introduction
                                    </label>
                                    <textarea
                                        id="introduction"
                                        className="mt-1 h-48 block w-full rounded-md"
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
                                    <label
                                        htmlFor="habitation"
                                        className="block text-lg font-medium text-gray-600"
                                    >
                                        Habitation
                                    </label>
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
                                    <label
                                        htmlFor="nationality"
                                        className="block text-lg font-medium text-gray-600"
                                    >
                                        Nationality
                                    </label>
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
                                    <label
                                        htmlFor="url"
                                        className="block text-lg font-medium text-gray-700"
                                    >
                                        URL
                                    </label>
                                    <input
                                        id="url"
                                        type="text"
                                        className="mt-1 block w-full rounded-md"
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                        autoComplete="off"
                                    />
                                    <InputError
                                        className="mt-2"
                                        message={errors.url}
                                    />
                                </div>

                                {mustVerifyEmail &&
                                    auth.user.email_verified_at === null && (
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
                                                    A new verification link has
                                                    been sent to your email
                                                    address.
                                                </div>
                                            )}
                                        </div>
                                    )}

                                <div className="mt-2 flex flex-row-reverse items-end">
                                    <div className="ml-2">
                                        <Button
                                            onClick={submit}
                                            className="py-2 px-5"
                                        >
                                            Save
                                        </Button>
                                    </div>
                                    <Button
                                        colorSet={
                                            {
                                                bg_color: "bg-gray-500",
                                                bg_hover: "hover:bg-gray-700",
                                            }
                                        }
                                        className="text-white ml-6 px-5"
                                        onClick={() => {
                                            router.visit("/events");
                                        }}
                                    >
                                        Back
                                    </Button>

                                    <div>
                                        <Link
                                            href={route('password.edit')}
                                            className="underline text-md ml-4 text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Update Password?
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            href={route('profile.delete')}
                                            className="underline text-md text-red-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Delete Account?
                                        </Link>
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
