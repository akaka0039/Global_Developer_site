import { useRef, useState } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";
import { useForm, router } from "@inertiajs/react";
import Button from "@/Components/Button";

export default function DeleteUserForm({ auth, className = "" }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: "",
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route("profile.destroy"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-400">
            <div className="p-4 sm:p-8 bg-white shadow-lg rounded-lg max-w-xl w-full">
                <header>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-900">
                        Delete Account
                    </h2>

                    <p className="mt-2 text-sm sm:text-base text-gray-600">
                        Once your account is deleted, all of its resources and
                        data will be permanently deleted. Before deleting your
                        account, please download any data or information that
                        you wish to retain.
                    </p>
                </header>

                <Button
                    onClick={confirmUserDeletion}
                    colorSet={{
                        bg_color: "bg-danger",
                        bg_hover: "hover: bg-danger-hover",
                        text_color: "text-white",
                        text_hover: "hover: text-white"
                    }}
                    className="mt-4"
                >
                    Delete Account
                </Button>

                <Button
                    colorSet={
                        {
                            bg_color: "bg-gray-500",
                            bg_hover: "hover:bg-gray-700",
                        }
                    }
                    className="text-white ml-2 px-5"
                    onClick={() => {
                        router.visit("/profile");
                    }}
                >
                    Back
                </Button>

                <Modal show={confirmingUserDeletion} onClose={closeModal}>
                    <form onSubmit={deleteUser} className="p-6">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-900">
                            Are you sure you want to delete your account?
                        </h2>

                        <p className="mt-2 text-sm sm:text-base text-gray-600">
                            Once your account is deleted, all of its resources
                            and data will be permanently deleted. Please enter
                            your password to confirm you would like to
                            permanently delete your account.
                        </p>

                        <div className="mt-6">
                            <InputLabel
                                htmlFor="password"
                                value="Password"
                                className="sr-only"
                            />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                ref={passwordInput}
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                className="mt-2 block w-full sm:w-3/4 text-lg"
                                isFocused
                                placeholder="Password"
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2 text-base"
                            />
                        </div>

                        <div className="mt-6 flex justify-end">
                            <Button
                                onClick={closeModal}
                                colorSet={{
                                    bg_color: "bg-transparent",
                                    bg_hover: "hover: bg-transdparent",
                                    text_color: "text-gray-500",
                                    text_hover: "hover: gray-500"
                                }}

                            >
                                Cancel
                            </Button>

                            <Button
                                colorSet={{
                                    bg_color: "bg-danger",
                                    bg_hover: "hover: bg-danger-hover",
                                    text_color: "text-white",
                                    text_hover: "hover: text-white"
                                }}
                                className="ml-2"
                                disabled={processing}
                            >
                                Delete Account
                            </Button>
                        </div>
                    </form>
                </Modal>
            </div>
        </div>
    );
}
