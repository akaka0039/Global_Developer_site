import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import React, { useState } from "react";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
            introduction: user.introduction,
            habitation: user.habitation,
            nationality: user.nationality,
            url: user.url,
        });

    // drag & drop
    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        // const imagePath = URL.createObjectURL(file);
        setFormData({ ...formData, imagePath });
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        // Add drag over styles if needed
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        // Remove drag over styles if needed
    };

    const submit = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
    };
    const [formData, setFormData] = useState({
        imagePath: "/images/top_background.jpg",
    });

    return (
        // <section className={className}>
        <div>
            <header>
                <h2 className="text-xl font-medium text-gray-900">
                    Profile Information
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-1">
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="image"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Image
                            </label>
                            {formData.imagePath && (
                                <div className="mt-2 h-72 ">
                                    <img
                                        src={formData.imagePath}
                                        alt="Event"
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
                                    <svg
                                        className="mx-auto h-12 w-12 text-gray-400"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M20 9l-7 7m0 0l7 7m-7-7v18"
                                        />
                                    </svg>
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
                                            />
                                        </label>
                                        <p className="pl-1">or drag & drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        PNG、JPG、GIF Max size: 5MB
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-1">
                        <div>
                            <InputLabel htmlFor="name" value="Name" />

                            <TextInput
                                id="name"
                                className="mt-1 block w-full"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                                isFocused
                                autoComplete="name"
                            />

                            <InputError
                                className="mt-2"
                                message={errors.name}
                            />
                        </div>

                        <div>
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                className="mt-1 block w-full"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
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
                            <InputLabel
                                htmlFor="introduction"
                                value="Introduction"
                            />

                            <TextInput
                                id="introduction"
                                className="mt-1 block w-full"
                                value={data.introduction}
                                onChange={(e) =>
                                    setData("introduction", e.target.value)
                                }
                                autoComplete="off"
                            />

                            <InputError
                                className="mt-2"
                                message={errors.introduction}
                            />
                        </div>

                        <div>
                            <InputLabel
                                htmlFor="habitation"
                                value="Habitation"
                            />

                            <TextInput
                                id="habitation"
                                className="mt-1 block w-full"
                                value={data.habitation}
                                onChange={(e) =>
                                    setData("habitation", e.target.value)
                                }
                                autoComplete="off"
                            />

                            <InputError
                                className="mt-2"
                                message={errors.habitation}
                            />
                        </div>

                        <div>
                            <InputLabel
                                htmlFor="nationality"
                                value="Nationality"
                            />

                            <TextInput
                                id="nationality"
                                className="mt-1 block w-full"
                                value={data.nationality}
                                onChange={(e) =>
                                    setData("nationality", e.target.value)
                                }
                                autoComplete="off"
                            />

                            <InputError
                                className="mt-2"
                                message={errors.nationality}
                            />
                        </div>

                        <div>
                            <InputLabel htmlFor="url" value="URL" />

                            <TextInput
                                id="url"
                                className="mt-1 block w-full"
                                value={data.url}
                                onChange={(e) => setData("url", e.target.value)}
                                autoComplete="off"
                            />

                            <InputError className="mt-2" message={errors.url} />
                        </div>

                        {mustVerifyEmail && user.email_verified_at === null && (
                            <div>
                                <p className="text-sm mt-2 text-gray-800">
                                    Your email address is unverified.
                                    <Link
                                        href={route("verification.send")}
                                        method="post"
                                        as="button"
                                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Click here to re-send the verification
                                        email.
                                    </Link>
                                </p>

                                {status === "verification-link-sent" && (
                                    <div className="mt-2 font-medium text-sm text-green-600">
                                        A new verification link has been sent to
                                        your email address.
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="flex items-center gap-4 pt-3">
                            <PrimaryButton disabled={processing}>
                                Save
                            </PrimaryButton>

                            <Transition
                                show={recentlySuccessful}
                                enterFrom="opacity-0"
                                leaveTo="opacity-0"
                                className="transition ease-in-out"
                            >
                                <p className="text-sm text-gray-600">Saved.</p>
                            </Transition>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        // </section>
    );
}
