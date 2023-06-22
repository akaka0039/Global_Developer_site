import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import ProfileEdit from "./Partials/ProfileEdit";
import GeneralLayout from "@/Layouts/GeneralLayout";

export default function Edit({ auth, mustVerifyEmail, status, errors, flash }) {
    return (
        <>
            <div className="pb-10">
                <ProfileEdit
                    auth={auth}
                    mustVerifyEmail={mustVerifyEmail}
                    status={status}
                    errors={errors}
                    flash={flash}
                    className="max-w-xl"
                />
            </div>

            <div className="p-4 sm:p-8 bg-gray-100 shadow sm:rounded-lg">
                <UpdatePasswordForm className="max-w-xl" />
            </div>

            <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                <DeleteUserForm className="max-w-xl" />
            </div>
        </>
    );
}
