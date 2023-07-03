import Layout from "@/Layouts/Layouts";
import React from "react";
import Section1 from "@/components/about/Section1";
import Section2 from "@/components/about/Section2";



export default function About() {
    return (
        <Layout title="About">
            {/* container */}
            <div className="w-full bg-[#FDFDFD] flex-1 h-auto justify-center items-center py-20 px-5">

                {/* title */}
                <div className="flex justify-center h-auto p-1 m-4 lg:m-10">
                    <h1 className="font-sans font-bold text-3xl lg:text-5xl">
                        ABOUT <span className="text-[#0D7377]">US</span>
                    </h1>
                </div>

                <Section1 />

                <Section2/>
            </div>
        </Layout>
    );
}
