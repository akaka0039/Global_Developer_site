import { useRef } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { useForm, router } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import Button from "@/Components/Button";

export default function UpdatePasswordForm({ auth, className = "" }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route("password.update"), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset("password", "password_confirmation");
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset("current_password");
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <>
            <div className="p-4 sm:p-8 bg-white shadow-lg rounded-lg max-w-xl w-full mx-auto">
                <header>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-900 text-center">
                        Update Password
                    </h2>

                    <p className="mt-2 text-sm sm:text-base text-gray-600 text-center">
                        Ensure your account is using a long, random password to
                        stay secure.
                    </p>
                </header>

                <form onSubmit={updatePassword} className="mt-6 space-y-6">
                    <div>
                        <InputLabel
                            htmlFor="current_password"
                            value="Current Password"
                        />

                        <TextInput
                            id="current_password"
                            ref={currentPasswordInput}
                            value={data.current_password}
                            onChange={(e) =>
                                setData("current_password", e.target.value)
                            }
                            type="password"
                            className="mt-2 block w-full text-lg"
                            autoComplete="current-password"
                        />

                        <InputError
                            message={errors.current_password}
                            className="mt-2 text-base"
                        />
                    </div>

                    <div>
                        <InputLabel htmlFor="password" value="New Password" />

                        <TextInput
                            id="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            type="password"
                            className="mt-2 block w-full text-lg"
                            autoComplete="new-password"
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2 text-base"
                        />
                    </div>

                    <div>
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Confirm Password"
                        />

                        <TextInput
                            id="password_confirmation"
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            type="password"
                            className="mt-2 block w-full text-lg"
                            autoComplete="new-password"
                        />

                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2 text-base"
                        />
                    </div>

                    <div className="flex flex-row-reverse items-end gap-2">
                        <Button
                            disabled={processing}
                            className="px-5"
                        >
                            Save
                        </Button>
                        <Button
                            colorSet={
                                {
                                    bg_color: "bg-gray-500",
                                    bg_hover: "hover:bg-gray-700",
                                }
                            }
                            className="px-5"
                            onClick={() => {
                                router.visit("/profile");
                            }}
                            submit={false}
                        >
                            Back
                        </Button>

                        <Transition
                            show={recentlySuccessful}
                            enterFrom="opacity-0"
                            leaveTo="opacity-0"
                            className="transition ease-in-out"
                        >
                            <p className="text-sm text-gray-600">Saved.</p>
                        </Transition>
                    </div>
                </form>
            </div>
        </>
    );
}
