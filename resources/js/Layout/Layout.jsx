import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Head } from "@inertiajs/react";
import Aos from "aos";
import React from "react";
import { useEffect } from "react";

export default function Layout({ children, title }) {
    useEffect(() => {
        Aos.init({
            once: true,
            disable: "phone",
            duration: 600,
            easing: "ease-out-sine",
        });
    }, []);
    return (
        <>
            {title && <Head title={title} />}
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
