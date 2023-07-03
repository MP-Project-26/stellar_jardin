import NavbarAdmin from "@/components/NavbarAdmin";
import Navbar from "@/components/Navbar";
import { Head } from "@inertiajs/react";
import React from "react";
import { useEffect } from "react";
import HeaderAdmin from "@/Components/HeaderAdmin";

export default function LayoutAdmin({ children, title, auth }) {
    return (
        <>
            {title && <Head title={title} />}

            <div className="flex">
                <HeaderAdmin auth={auth} />
                <NavbarAdmin />
                <div className="flex-1 p-7 pt-[4rem]">{children}</div>
            </div>
        </>
    );
}
