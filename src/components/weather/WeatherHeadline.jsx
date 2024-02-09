import { useContext } from "react";
import CloudIcon from "../../assets/cloud.svg";
import HazeIcon from "../../assets/haze.svg";
import SnowIcon from "../../assets/icons/snow.svg";
import SunnyIcon from "../../assets/icons/sunny.svg";
import RainIcon from "../../assets/rainy.svg";
import ThunderIcon from "../../assets/thunder.svg";
import PinIcon from "../../assets/pin.svg";
import { WeatherContext } from "../../context";
import { getFormattedDate } from "../../utils/date-utils";
import { Card } from "@radix-ui/themes";
import { GrLocation } from "react-icons/gr";

const WeatherHeadline = () => {
    const { weatherData } = useContext(WeatherContext);

    const { climate, location, temperature, time } = weatherData;

    function getWeatherIcon(climate) {
        switch (climate) {
            case "Rain":
                return RainIcon;
            case "Clouds":
                return CloudIcon;
            case "Clear":
                return SunnyIcon;
            case "Snow":
                return SnowIcon;
            case "Thunder":
                return ThunderIcon;
            case "Fog":
                return HazeIcon;
            case "Haze":
                return HazeIcon;
            case "Mist":
                return HazeIcon;

            default:
                return SunnyIcon;
        }
    }

    return (
        <Card
            variant="surface"
            size="5"
            style={{ width: "100%", height: "auto" }}
        >
            <div>
                <div className="max-md:flex items-center justify-between">
                    <img src={getWeatherIcon(climate)} alt="climate" />
                    <div className="max-md:flex items-center max-md:space-x-4">
                        <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
                            {Math.round(temperature)}°
                        </h1>
                        <hr className="mb-5" />
                        <div className="flex items-center space-x-2 md:mb-4">
                            <GrLocation />
                            <h2 className="text-base">{location}</h2>
                        </div>
                    </div>
                </div>
                <p className="text-sm lg:text-lg">
                    {getFormattedDate(time, "time", false)} <br />
                    {getFormattedDate(time, "date", false)}
                </p>
            </div>
        </Card>
    );
};

export default WeatherHeadline;

//! old code
// import { useContext } from "react";
// import CloudIcon from "../../assets/cloud.svg";
// import HazeIcon from "../../assets/haze.svg";
// import SnowIcon from "../../assets/icons/snow.svg";
// import SunnyIcon from "../../assets/icons/sunny.svg";
// import RainIcon from "../../assets/rainy.svg";
// import ThunderIcon from "../../assets/thunder.svg";
// import PinIcon from "../../assets/pin.svg";
// import { WeatherContext } from "../../context";
// import { getFormattedDate } from "../../utils/date-utils";

// const WeatherHeadline = () => {
//     const { weatherData } = useContext(WeatherContext);

//     const { climate, location, temperature, time } = weatherData;

//     function getWeatherIcon(climate) {
//         switch (climate) {
//             case "Rain":
//                 return RainIcon;
//             case "Clouds":
//                 return CloudIcon;
//             case "Clear":
//                 return SunnyIcon;
//             case "Snow":
//                 return SnowIcon;
//             case "Thunder":
//                 return ThunderIcon;
//             case "Fog":
//                 return HazeIcon;
//             case "Haze":
//                 return HazeIcon;
//             case "Mist":
//                 return HazeIcon;

//             default:
//                 return SunnyIcon;
//         }
//     }

//     return (
//         <div>
//             <div className="max-md:flex items-center justify-between">
//                 <img src={getWeatherIcon(climate)} alt="climate" />
//                 <div className="max-md:flex items-center max-md:space-x-4">
//                     <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
//                         {Math.round(temperature)}°
//                     </h1>
//                     <div className="flex items-center space-x-4 md:mb-4">
//                         <img src={PinIcon} />
//                         <h2 className="text-2xl lg:text-[50px]">{location}</h2>
//                     </div>
//                 </div>
//             </div>
//             <p className="text-sm lg:text-lg">
//                 {getFormattedDate(time, "time", false)} -
//                 {getFormattedDate(time, "date", false)}
//             </p>
//         </div>
//     );
// };

// export default WeatherHeadline;
