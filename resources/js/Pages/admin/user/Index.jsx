import TextInput from "@/Components/login/TextInput";
import InputError from "@/Components/login/InputError";
import InputLabel from "@/Components/login/InputLabel";
import PrimaryButton from "@/Components/login/PrimaryButton";
import LayoutAdmin from "@/Layouts/LayoutAdmin";
import { useForm, Link } from "@inertiajs/react";
import { useEffect } from "react";
import { useState } from "react";

export default function Index({ auth, dataUser }) {
    const [data,setData]=useState([])
    useEffect(() => {
        setData(dataUser)
    }, [dataUser])
    return (
        <LayoutAdmin title="Dashboard" auth={auth}>
            <ModalNewUser />
            <div className="w-full pt-10 justify-center items-center">
                <h1 className="font-sans font-bold text-black text-2xl md:text-3xl">
                    USER MANAGEMENT
                </h1>
                <div className="w-full flex flex-row justify-end">
                    <button
                        onClick={() => window.my_modal_1.show()}
                        className="p-2 bg-green-custom rounded-xl text-xl font-extrabold text-white"
                    >
                        New User
                    </button>
                </div>
                <div className="overflow-x-auto mt-5">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-green-custom">
                                <th className="text-xl font-extrabold text-white">
                                    no
                                </th>
                                <th className="text-xl font-extrabold text-white">
                                    name
                                </th>
                                <th className="text-xl font-extrabold text-white">
                                    Email
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((res, i) => (
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>{res.name}</td>
                                    <td>{res.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </LayoutAdmin>
    );
}

const ModalNewUser = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("createUser"));
        window.my_modal_1.close();
    };

    return (
        <>
            {processing && (
                <div className="fixed z-[100] inset-0 overflow-y-auto">
                    <div className="toast toast-center toast-top">
                        <div className="alert alert-success mt-[5rem]">
                            <span className="text-2xl text-white font-extrabold">
                                Berhasil membuat akun
                            </span>
                        </div>
                    </div>
                </div>
            )}
            <dialog
                id="my_modal_1"
                className="modal backdrop-blur-sm border-0 "
            >
                <div className="lg:w-[60rem] lg:h-[43rem] h-[20rem] relative rounded-xl bg-transparant">
                    <button
                        className=" btn btn-sm btn-circle btn-ghost absolute right-5 top-5 bg-white shadow-xl border border-gray-500 z-[100] select-none"
                        onClick={() => window.my_modal_1.close()}
                    >
                        ✕
                    </button>

                    <div className="lg:w-[60rem] lg:h-[40rem]  h-[20rem]  p-[3rem] bg">
                        <form
                            onSubmit={submit}
                            className="bg-white flex flex-col gap-[1.2rem] p-10 h-[100%] rounded-2xl shadow-xl"
                        >
                            <div>
                                <InputLabel htmlFor="name" value="Name" />

                                <TextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="email" value="Email" />

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="password"
                                    value="Password"
                                />

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="password_confirmation"
                                    value="Confirm Password"
                                />

                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.password_confirmation}
                                    className="mt-2"
                                />
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <PrimaryButton
                                    className="ml-4"
                                    disabled={processing}
                                >
                                    Tambah
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};
