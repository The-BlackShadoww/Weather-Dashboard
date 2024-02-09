import { Button } from "@radix-ui/themes";

const Favourite = ({ onShow }) => {
    return (
        <div className="w-[20%] p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center justify-center rounded-md transition-all">
            <Button
                size="3"
                color="indigo"
                onClick={onShow}
                className="cursor-pointer break-words"
                style={{ width: "100%" }}
            >
                <span className="md:text-base text-sm"> Favorite Locations</span>
            </Button>
        </div>
    );
};

export default Favourite;

// ! old code
// import HeartIcon from "../../assets/heart.svg";

// const Favourite = ({ onShow }) => {
//     return (
//         <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
//             <img src={HeartIcon} alt="" />
//             <span onClick={onShow}>Favorite Locations</span>
//         </div>
//     );
// };

// export default Favourite;
