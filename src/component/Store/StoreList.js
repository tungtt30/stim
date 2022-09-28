import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Card from '../../component/Store/Card'




const StoreList = ({ itemsPerPage, items }) => {

    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };



    return (
        <>
            <div className=' flex w-screen justify-center'>
                <ReactPaginate
                    className='flex text-white space-x-10 my-2 select-none'
                    breakLabel="..."
                    nextLabel={'Next >'}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< Previous"
                    renderOnZeroPageCount={null}
                />

            </div>
            <div className='h-auto  text-white grid grid-cols-1 scrollbar-hidden gap-1 transition-all md:grid-cols-2 lg:grid-cols-4'>
                {currentItems &&
                    currentItems.map((item, index) => (
                        <Card key={index} gameData={item} />
                    ))}
            </div>
        </>
    )


}




export default StoreList