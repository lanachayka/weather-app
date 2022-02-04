import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchWeaherData = createAsyncThunk('weather/fetchWeaherData',
    async function () {
        navigator.geolocation.getCurrentPosition( async function (position) {
            const response = await fetch(`$api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=069a15542effbc5992ff749a5547a952`);
            const data = await response.json();
            return data
        });
    }
);

const weatherSlice = createSlice({
    name: 'weatherSlice',
    initialState: {
        weatherData: [],
        status: null
    },
    extraReducers: {
        [fetchWeaherData.pending]: (state) => {
            state.status = 'Loading';
        },
        [fetchWeaherData.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.weatherData = action.payload;
        }
    }
});

export default weatherSlice.reducer;