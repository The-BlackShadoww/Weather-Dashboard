import { useContext, useState, useEffect } from "react";
import { FavoriteContext, WeatherContext } from "../../context";
import HeartIcon from "../../assets/heart.svg";
import RedHeartIcon from "../../assets/heart-red.svg";
import { Button } from "@radix-ui/themes";

const AddToFavorite = () => {
    const { weatherData } = useContext(WeatherContext);
    const { latitude, longitude, location } = weatherData;
    const { addToFavorites, removeFromFavorites, favorites } =
        useContext(FavoriteContext);
    const [isFavorite, toggleFavorite] = useState(false);

    useEffect(() => {
        const found = favorites.find((fav) => fav.location === location);
        toggleFavorite(found);
    }, []);

    //! handle favorite
    const handleFavorites = () => {
        const found = favorites.find((fav) => fav.location === location);
        if (!found) {
            addToFavorites(latitude, longitude, location);
        } else {
            removeFromFavorites(location);
        }
        toggleFavorite(!isFavorite);
    };

    return (
        <div className="md:col-span-2">
            <div className="flex items-center justify-end space-x-6">
                <Button
                    size="4"
                    color="gray"
                    variant="soft"
                    onClick={handleFavorites}
                    className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md cursor-pointer"
                >
                    <span>Add to Favourite</span>
                    <img src={isFavorite ? RedHeartIcon : HeartIcon} alt="" />
                </Button>
            </div>
        </div>
    );
};

export default AddToFavorite;

// ! old code

// import { useContext, useState, useEffect } from "react";
// import { FavoriteContext, WeatherContext } from "../../context";
// import HeartIcon from "../../assets/heart.svg";
// import RedHeartIcon from "../../assets/heart-red.svg";

// const AddToFavorite = () => {
//     const { weatherData } = useContext(WeatherContext);
//     const { latitude, longitude, location } = weatherData;
//     const { addToFavorites, removeFromFavorites, favorites } =
//         useContext(FavoriteContext);
//     const [isFavorite, toggleFavorite] = useState(false);

//     useEffect(() => {
//         const found = favorites.find((fav) => fav.location === location);
//         toggleFavorite(found);
//     }, []);

//     //! handle favorite
//     const handleFavorites = () => {
//         const found = favorites.find((fav) => fav.location === location);
//         if (!found) {
//             addToFavorites(latitude, longitude, location);
//         } else {
//             removeFromFavorites(location);
//         }
//         toggleFavorite(!isFavorite);
//     };

//     return (
//         <div className="md:col-span-2">
//             <div className="flex items-center justify-end space-x-6">
//                 <button
//                     onClick={handleFavorites}
//                     className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
//                 >
//                     <span>Add to Favourite</span>
//                     <img src={isFavorite ? RedHeartIcon : HeartIcon} alt="" />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default AddToFavorite;
