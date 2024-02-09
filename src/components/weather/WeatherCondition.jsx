import { useContext } from "react";
import CloudyIcon from "../../assets/icons/cloud.svg";
import HumidityIcon from "../../assets/icons/humidity.svg";
import TempMaxIcon from "../../assets/icons/temp-max.svg";
import TempMinIcon from "../../assets/icons/temp-min.svg";
import WindIcon from "../../assets/icons/wind.svg";
import { WeatherContext } from "../../context";
import { Card } from "@radix-ui/themes";
import { GoEye } from "react-icons/go";

const WeatherCondition = () => {
    const { weatherData } = useContext(WeatherContext);

    const {
        maxTemperature,
        minTemperature,
        humidity,
        cloudPercentage,
        wind,
        visibility,
        climate,
    } = weatherData;

    return (
        <div className="">
            {/* <p className="text-sm lg:text-lg font-bold uppercase mb-8">
                The climate is <u>{climate}</u>
            </p> */}
            <ul className="grid grid-cols-2 gap-5">
                <Card size="5">
                    <li className="flex items-center justify-center">
                        <img src={TempMaxIcon} alt="temp-max" />
                        <div className="ml-5">
                            <span>Temp max</span>
                            <br />
                            <div className="inline-flex space-x-4">
                                <p className="text-lg font-semibold">
                                    {Math.round(maxTemperature)}°
                                </p>
                            </div>
                        </div>
                    </li>
                </Card>
                <Card size="5">
                    <li className="flex items-center justify-center">
                        <img src={TempMinIcon} alt="temp-min" />
                        <div className="ml-5">
                            <span>Temp min</span>
                            <br />
                            <div className="inline-flex space-x-4">
                                <p className="text-lg font-semibold">
                                    {Math.round(minTemperature)}°
                                </p>
                            </div>
                        </div>
                    </li>
                </Card>
                <Card size="5">
                    <li className="flex items-center justify-center">
                        <img src={HumidityIcon} alt="humidity" />
                        <div className="ml-5">
                            <span>Humadity</span>
                            <br />
                            <div className="inline-flex space-x-4">
                                <p className="text-lg font-semibold">
                                    {humidity}%
                                </p>
                            </div>
                        </div>
                    </li>
                </Card>
                <Card size="5">
                    <li className="flex items-center justify-center">
                        <img src={CloudyIcon} alt="cloudy" />
                        <div className="ml-5">
                            <span>Cloudy</span> <br />
                            <div className="inline-flex space-x-4">
                                <p className="text-lg font-semibold">
                                    {cloudPercentage}%
                                </p>
                            </div>
                        </div>
                    </li>
                </Card>
                <Card size="5">
                    <li className="flex items-center justify-center">
                        <img src={WindIcon} alt="wind" />
                        <div className="ml-4">
                            <span>Wind</span>
                            <br />
                            <div className="inline-flex space-x-4">
                                <p className="text-lg font-semibold">
                                    {wind}km/h
                                </p>
                            </div>
                        </div>
                    </li>
                </Card>
                <Card size="5">
                    <li className="flex items-center justify-center">
                        <GoEye size="25" />
                        <div className="ml-4">
                            <span>Visibility</span>
                            <br />
                            <div className="inline-flex space-x-4">
                                <p className="text-lg font-semibold">
                                    {visibility / 100}km
                                </p>
                            </div>
                        </div>
                    </li>
                </Card>
            </ul>
        </div>
    );
};

export default WeatherCondition;

//! old code
// import { useContext } from "react";
// import CloudyIcon from "../../assets/icons/cloud.svg";
// import HumidityIcon from "../../assets/icons/humidity.svg";
// import TempMaxIcon from "../../assets/icons/temp-max.svg";
// import TempMinIcon from "../../assets/icons/temp-min.svg";
// import WindIcon from "../../assets/icons/wind.svg";
// import { WeatherContext } from "../../context";

// const WeatherCondition = () => {
//     const { weatherData } = useContext(WeatherContext);

//     const {
//         maxTemperature,
//         minTemperature,
//         humidity,
//         cloudPercentage,
//         wind,
//         climate,
//     } = weatherData;

//     return (
//         <div>
//             <p className="text-sm lg:text-lg font-bold uppercase mb-8">
//                 The climate is <u>{climate}</u>
//             </p>
//             <ul className="space-y-6 lg:space-y-6">
//                 <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
//                     <span>Temp max</span>
//                     <div className="inline-flex space-x-4">
//                         <p>{Math.round(maxTemperature)}°</p>
//                         <img src={TempMaxIcon} alt="temp-max" />
//                     </div>
//                 </li>
//                 <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
//                     <span>Temp min</span>
//                     <div className="inline-flex space-x-4">
//                         <p>{Math.round(minTemperature)}°</p>
//                         <img src={TempMinIcon} alt="temp-min" />
//                     </div>
//                 </li>
//                 <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
//                     <span>Humadity</span>
//                     <div className="inline-flex space-x-4">
//                         <p>{humidity}%</p>
//                         <img src={HumidityIcon} alt="humidity" />
//                     </div>
//                 </li>
//                 <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
//                     <span>Cloudy</span>
//                     <div className="inline-flex space-x-4">
//                         <p>{cloudPercentage}%</p>
//                         <img src={CloudyIcon} alt="cloudy" />
//                     </div>
//                 </li>
//                 <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
//                     <span>Wind</span>
//                     <div className="inline-flex space-x-4">
//                         <p>{wind}km/h</p>
//                         <img src={WindIcon} alt="wind" />
//                     </div>
//                 </li>
//             </ul>
//         </div>
//     );
// };

// export default WeatherCondition;
