import TextInput from "@/Components/auth/login/TextInput";
import FooterStelar from "@/assets/login/footer_stellar.png";
import BGGAMBAR from "@/assets/login/BGGAMBAR.png";
import MPFOOTER from "@/assets/login/mp-footer.png";
import { Head, Link, useForm } from "@inertiajs/react";
import React, { useEffect } from "react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };
    return (
        <>
            <Head title="Login" />
            <div className="w-full flex flex-row p-32">
                <div className="bg-white w-full h-screen flex flex-col gap-8 p-[2rem] font-roboto">
                    <img
                        src={FooterStelar}
                        alt=""
                        className="w-[9rem] h-[9rem] invert"
                    />

                    <div className="flex flex-col gap-4">
                        <span className="text-4xl font-bold">
                            Welcome Back!
                        </span>
                        <span className="text-lg text-green-custom font-semibold">
                            Please login to your account
                        </span>
                        {status && (
                            <span className="text-lg text-green-custom font-semibold">
                                {status}
                            </span>
                        )}

                        <form onSubmit={submit}>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email">
                                        Email{" "}
                                        <span className="text-green-custom font-extrabold">
                                            *
                                        </span>
                                    </label>{" "}
                                    {errors.email && (
                                        <span className="text-red-800 text-xs font-semibold">
                                            {errors.email}
                                        </span>
                                    )}
                                    <TextInput
                                        type="email"
                                        name="email"
                                        id="email"
                                        className={`${
                                            errors.email && "border-red-800"
                                        } text-green-custom`}
                                        placeholder="Email"
                                        autoComplete="email"
                                        isFocused={true}
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="password">
                                        Password{" "}
                                        <span className="text-green-custom font-extrabold">
                                            *
                                        </span>
                                    </label>
                                    {errors.password && (
                                        <span className="text-red-800 text-xs font-semibold">
                                            {errors.password}
                                        </span>
                                    )}
                                    <TextInput
                                        type="password"
                                        name="password"
                                        id="password"
                                        className={`${
                                            errors.password && "border-red-800"
                                        } text-green-custom`}
                                        placeholder="*******"
                                        autoComplete="password"
                                        isFocused={true}
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />
                                </div>

                                <div className="flex flex-row justify-between items-center select-none">
                                    <div className="flex flex-row items-center gap-2">
                                        <input
                                            type="checkbox"
                                            name="remember"
                                            id="remember"
                                            checked={data.remember}
                                            onChange={(e) =>
                                                setData(
                                                    "remember",
                                                    e.target.checked
                                                )
                                            }
                                        />
                                        <label htmlFor="remember">
                                            Remember me
                                        </label>
                                    </div>
                                </div>

                                <button
                                    className="bg-green-custom rounded-md p-2 text-white font-bold select-none"
                                    disabled={processing}
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="bg-gray-300 w-full h-screen flex flex-row relative ">
                    <img
                        src={BGGAMBAR}
                        alt=""
                        className="w-full object-cover"
                    />
                    <div className="absolute bottom-3 w-full flex justify-center">
                        <span className=" text-md font-roboto text-gray-300 flex flex-row items-center gap-3">
                            Powered by <img src={MPFOOTER} alt="" /> PROJECT
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
