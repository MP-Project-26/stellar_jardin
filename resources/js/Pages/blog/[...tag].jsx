import React from "react";
import { useEffect } from "react";

export default function TagBlog({ dataTag, slug }) {
    useEffect(() => {
        console.log(dataTag, slug);
    }, [dataTag]);
    return <div>TagBlog</div>;
}
