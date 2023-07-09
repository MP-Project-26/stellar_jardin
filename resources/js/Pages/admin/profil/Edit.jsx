import TextInput from "@/Components/login/TextInput";
import LayoutAdmin from "@/Layouts/LayoutAdmin";
import { useForm, usePage } from "@inertiajs/react";
import React, { useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import InputError from "@/Components/login/InputError";

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <LayoutAdmin title="Dashboard" auth={auth}>
            <div className="w-full justify-center items-center flex flex-col pt-[5rem] gap-[2rem]">
                <EditProfil mustVerifyEmail={mustVerifyEmail} status={status} />
                <EditPassword />
                <DeleteUserForm />
            </div>
        </LayoutAdmin>
    );
}

const EditProfil = ({ mustVerifyEmail, status, className = "" }) => {
    const user = usePage().props.auth.user;
    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });
    const submit = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
    };

    return (
        <div className="bg-green-custom w-[30rem] p-3 flex flex-col gap-2 rounded-xl">
            <h1 className="font-sans font-bold text-white text-2xl md:text-3xl">
                Edit Profil
            </h1>
            <form onSubmit={submit} className=" space-y-4">
                <div className="w-full  space-y-2">
                    <label
                        htmlFor="name"
                        className="text-2xl text-white font-medium"
                    >
                        Name{" "}
                        <span className="text-white font-extrabold">*</span>
                    </label>{" "}
                    <TextInput
                        id="name"
                        label="name"
                        name="name"
                        type="text"
                        className="w-full"
                        required
                        isFocused
                        autoComplete="name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    <InputError
                        className="mt-2 bg-gray-900 p-1 "
                        message={errors.name}
                    />
                </div>
                <div className="w-full space-y-2">
                    <label
                        htmlFor="email"
                        className="text-2xl text-white font-medium"
                    >
                        Email{" "}
                        <span className="text-white font-extrabold">*</span>
                    </label>{" "}
                    <TextInput
                        id={"email"}
                        label="email"
                        name="email"
                        type="text"
                        className="w-full"
                        required
                        isFocused
                        autoComplete="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    <InputError
                        className="mt-2  bg-gray-900 p-1 "
                        message={errors.email}
                    />
                </div>
                {!recentlySuccessful ? (
                    <button
                        className="bg-white rounded-md p-2 text-green-custom font-bold select-none"
                        disabled={processing}
                    >
                        Save
                    </button>
                ) : (
                    <button className="bg-white rounded-md p-2 text-green-custom font-bold select-none">
                        Loading
                    </button>
                )}
                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 bg-gray-900 p-1  text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 bg-gray-900 p-1  font-medium text-sm text-green-600">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}
            </form>
        </div>
    );
};

const EditPassword = ({ status, className = "" }) => {
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
        <div className="bg-green-custom w-[30rem] p-3 flex flex-col gap-2 rounded-xl">
            <h1 className="font-sans font-bold text-white text-2xl md:text-3xl w-full">
                Edit Profil
            </h1>
            {recentlySuccessful && (
                <span className="text-center font-sans font-bold text-white bg-green-300 text-2xl md:text-3xl">
                    Berhasil
                </span>
            )}
            <form onSubmit={updatePassword} className=" space-y-4">
                <div className="w-full  space-y-2">
                    <label
                        htmlFor="current_password"
                        className="text-2xl text-white font-medium"
                    >
                        current password{" "}
                        <span className="text-white font-extrabold">*</span>
                    </label>{" "}
                    <TextInput
                        label="current_password"
                        id="current_password"
                        className="w-full"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        onChange={(e) =>
                            setData("current_password", e.target.value)
                        }
                        type="password"
                        autoComplete="current-password"
                    />
                    <InputError
                        message={errors.current_password}
                        className="mt-2 bg-gray-900 p-1 "
                    />
                </div>
                <div className="w-full space-y-2">
                    <label
                        htmlFor="password"
                        className="text-2xl text-white font-medium"
                    >
                        password{" "}
                        <span className="text-white font-extrabold">*</span>
                    </label>{" "}
                    <TextInput
                        label="password"
                        id="password"
                        ref={passwordInput}
                        className="w-full"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        type="password"
                        autoComplete="new-password"
                    />
                    <InputError
                        message={errors.password}
                        className="mt-2 bg-gray-900 p-1 "
                    />
                </div>
                <div className="w-full space-y-2">
                    <label
                        htmlFor="password_confirmation"
                        className="text-2xl text-white font-medium"
                    >
                        password confirmation{" "}
                        <span className="text-white font-extrabold">*</span>
                    </label>{" "}
                    <TextInput
                        label="password_confirmation"
                        id="password_confirmation"
                        className="w-full"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        type="password"
                        autoComplete="new-password"
                    />
                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2 bg-gray-900 p-1 "
                    />
                </div>
                {!recentlySuccessful ? (
                    <button
                        className="bg-white rounded-md p-2 text-green-custom font-bold select-none"
                        disabled={processing}
                    >
                        Save
                    </button>
                ) : (
                    <button className="bg-white rounded-md p-2 text-green-custom font-bold select-none">
                        Loading
                    </button>
                )}
            </form>
        </div>
    );
};

import DangerButton from "@/Components/login/DangerButton";
import InputLabel from "@/Components/login/InputLabel";
import Modal from "@/Components/login/Modal";
import SecondaryButton from "@/Components/login/SecondaryButton";

const DeleteUserForm = ({ className = "" }) => {
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
        <div className="bg-green-custom w-[30rem] p-3 flex flex-col gap-2 rounded-xl">
            <section className={`space-y-6 ${className}`}>
                <header>
                    <h2 className="text-lg font-medium text-white">
                        Delete Account
                    </h2>

                    <p className="mt-1 text-sm text-white">
                        Once your account is deleted, all of its resources and
                        data will be permanently deleted. Before deleting your
                        account, please download any data or information that
                        you wish to retain.
                    </p>
                </header>

                <DangerButton onClick={confirmUserDeletion}>
                    Delete Account
                </DangerButton>

                <Modal show={confirmingUserDeletion} onClose={closeModal}>
                    <form onSubmit={deleteUser} className="p-6">
                        <h2 className="text-lg font-medium text-gray-900">
                            Are you sure you want to delete your account?
                        </h2>

                        <p className="mt-1 text-sm text-gray-600">
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
                                className="mt-1 block w-3/4"
                                isFocused
                                placeholder="Password"
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-6 flex justify-end">
                            <SecondaryButton onClick={closeModal}>
                                Cancel
                            </SecondaryButton>

                            <DangerButton
                                className="ml-3"
                                disabled={processing}
                            >
                                Delete Account
                            </DangerButton>
                        </div>
                    </form>
                </Modal>
            </section>
        </div>
    );
};
