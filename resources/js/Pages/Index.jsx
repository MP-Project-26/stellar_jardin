import Layout from "@/Layout/Layout";
import AboutUs from "@/components/ui/About";
import Carousel from "@/components/ui/Carousal";
import React from "react";

const Index = () => {
    return (
        <Layout title="index">
            <Carousel />
            <AboutUs />
            <AboutUs />
            <AboutUs />
            <AboutUs />
        </Layout>
    );
};

export default Index;
