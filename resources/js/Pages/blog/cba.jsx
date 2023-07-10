import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function App() {
    return (
        <div className="App">
            <h1>Pagination</h1>
            <PaginatedItems itemsPerPage={2} />
        </div>
    );
}

const dataBlog = [...Array(233).keys()];

function PaginatedItems({ itemsPerPage }) {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(dataBlog.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(dataBlog.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % dataBlog.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                className="flex flex-row gap-1"
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                previousLabel="< previous"
                pageClassName="bg-teal-600 p-2 text-white"
                pageLinkClassName="page-link"
                previousClassName="bg-teal-600 p-2 text-white"
                previousLinkClassName="page-link"
                nextClassName="bg-teal-600 p-2 text-white"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="bg-teal-600 p-2 text-white"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </>
    );
}

function Items({ currentItems }) {
    return (
        <div className="items">
            {currentItems &&
                currentItems.map((item) => (
                    <div className="flex flex-row bg-teal-200 ">
                        <h3>Item #{item}</h3>
                    </div>
                ))}
        </div>
    );
}
