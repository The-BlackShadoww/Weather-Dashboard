import Page from "./Page";
import {
    FavoriteProvider,
    WeatherProvider,
    LocationProvider,
} from "./provider";
import { Theme, ThemePanel } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

function App() {
    return (
        <LocationProvider>
            <WeatherProvider>
                <FavoriteProvider>
                    <Theme appearance="dark">
                        <Page />
                    </Theme>
                </FavoriteProvider>
            </WeatherProvider>
        </LocationProvider>
    );
}

export default App;
