

const TestimonalsPagination = ({  items, pageSize, currentPage, onPageChange }) => {
    const pagesCount = Math.ceil(items / pageSize);
    const pageItemActiveStyle = 'flex mx-2 justify-center w-[1rem] h-[1rem] rounded-full bg-red-700 cursor-pointer';
    const pageItemInactiveStyle = 'flex mx-2 justify-center w-[1rem] h-[1rem] border-2 rounded-full bg-red-700 cursor-pointer';

    const pages = Array.from({ length: pagesCount }, (_, i) => i+1);
    
    return(
        <div>
            <ul className="mt-5 flex justify-center text-black">
                {
                    pages.map((page) => 
                        (
                            <li
                                key={page}
                                className={`${page === currentPage} `}
                                onClick={() => {onPageChange(page)}}
                            >
                                <span className={`${page === currentPage ? pageItemActiveStyle : pageItemInactiveStyle}`}></span>
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    );
}

export default TestimonalsPagination;