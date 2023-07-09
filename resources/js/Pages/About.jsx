import Layout from "@/Layouts/Layout";
import React from "react";
import Section1 from "@/components/about/Section1";
import Section2 from "@/components/about/Section2";

export default function About() {
    return (
        <Layout title="About">
            {/* container */}
            <div className="w-full bg-[#FDFDFD] flex-1 h-auto justify-center items-center py-20 px-5">
                {/* title */}


                <Section1 />

                <Section2 />
            </div>
        </Layout>
    );
}
