import Layout from "@/Layout/Layout";
import AboutUs from "@/components/ui/About";
import Carousel from "@/components/ui/Carousal";
import OurBlog from "@/components/ui/OurBlog";
import React from "react";

const Index = () => {
    return (
        <Layout title="index">
            <Carousel />
            <AboutUs />
            <OurBlog />
        </Layout>
    );
};

export default Index;
