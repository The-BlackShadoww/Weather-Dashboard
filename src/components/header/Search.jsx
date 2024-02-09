import { useContext } from "react";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/location-data";
import useDebounce from "../../hooks/useDebounc";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
    const { setSelectedLocation } = useContext(LocationContext);

    const doSearch = useDebounce((term) => {
        const fetchedLocation = getLocationByName(term);
        setSelectedLocation({ ...fetchedLocation });
    }, 500);

    const handleChange = (e) => {
        const value = e.target.value;
        doSearch(value);
    };

    return (
        <form action="#" className="w-[80%]">
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all rounded-md bg-[#272a2d]">
                <span>
                    <IoIosSearch />
                </span>
                <input
                    className="bg-transparent placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    type="search"
                    placeholder="Search Location"
                    required=""
                    onChange={handleChange}
                />
            </div>
        </form>
    );
};

export default Search;

//! old code

// import { useContext } from "react";
// import { LocationContext } from "../../context";
// import { getLocationByName } from "../../data/location-data";
// import useDebounce from "../../hooks/useDebounc";

// const Search = () => {
//     const { setSelectedLocation } = useContext(LocationContext);

//     const doSearch = useDebounce((term) => {
//         const fetchedLocation = getLocationByName(term);
//         setSelectedLocation({ ...fetchedLocation });
//     }, 500);

//     const handleChange = (e) => {
//         const value = e.target.value;
//         doSearch(value);
//     };

//     return (
//         <form action="#">
//             <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
//                 <input
//                     className="bg-transparent placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
//                     type="search"
//                     placeholder="Search Location"
//                     required=""
//                     onChange={handleChange}
//                 />
//             </div>
//         </form>
//     );
// };

// export default Search;
