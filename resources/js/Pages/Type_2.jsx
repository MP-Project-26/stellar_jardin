import Layout from "@/Layout/Layout";
import Galery from "@/components/type_2/Galery";
import Prieview from "@/components/type_2/Section_Prieview";
import React, { useState } from "react";

export default function Type_2({gallery}) {
//console.log(gallery)

    return (
        <Layout title="About">
            {/* container */}
            <div className="pt-24 lg:mt-10 pb-20">
            <Galery id="gallery" gallery={gallery}/>
            <Prieview/>
            </div>

        </Layout>
    );
}
