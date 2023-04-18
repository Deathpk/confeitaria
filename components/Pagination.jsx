
const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {

    const pagesCount = Math.ceil(items / pageSize);
    const pageItemActiveStyle = 'flex justify-center items-center w-[2rem] h-[2rem] b-1 b-[#eaeaea] rounded-sm bg-red-700 cursor-pointer';
    const pageItemInactiveStyle = 'flex justify-center items-center w-[2rem] h-[2rem] b-1 b-[#eaeaea] rounded-sm bg-blue-300 cursor-pointer';

    if(pagesCount === 1) return null;

    const pages = Array.from({ length: pagesCount }, (_, i) => i+1);
    
    return(
        <div>
            <ul className="ml-32 mt-5 flex items-center">
                {
                    pages.map((page) => 
                        (
                            <li
                                key={page}
                                className={`${page === currentPage ? pageItemActiveStyle : pageItemInactiveStyle} mx-1`}
                                onClick={() => {onPageChange(page)}}
                            >
                                {page}
                            </li>
                        )
                    )
                }
                <li className="text-black mx-2">
                    { items } items ao total
                </li>
            </ul>
         
        </div>
    );
}

export default Pagination;