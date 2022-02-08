import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice";
import forecastReducer from "./forecastSlice";

export default configureStore({
    reducer: {
        weather: weatherReducer,
        forecast: forecastReducer
    }
});
