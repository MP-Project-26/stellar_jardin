import NavbarAdmin from "@/components/NavbarAdmin";
import Navbar from "@/components/Navbar";
import { Head } from "@inertiajs/react";
import React from "react";
import { useEffect } from "react";

export default function LayoutAdmin({ children, title }) {
    return (
        <>
            {title && <Head title={title} />}

            <div className="flex">
                <NavbarAdmin />
                <div className="h-screen flex-1 p-7">{children}</div>
            </div>
        </>
    );
}
