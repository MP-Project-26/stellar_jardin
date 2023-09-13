import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Aos from "aos";
import { Head } from "@inertiajs/react";

import "aos/dist/aos.css";
import React from "react";
import { useEffect } from "react";

export default function Layout({ children, title }) {

    useEffect(() => {
        Aos.init({
            once: true,
            disable: "phone",
            duration: 1200,
            easing: "ease-out-sine",
        });
    }, []);

    return (
        <>
            {title && <Head title={title} />}
            <Navbar />
            <main className="-mt-[5rem] ">{children}</main>
            <Footer />
        </>
    );
}
