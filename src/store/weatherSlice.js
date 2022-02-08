import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchWeatherData = createAsyncThunk('weather/fetchWeatherData',
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetch('https://api.weatherapi.com/v1/current.json?key=0730661e7d8f491886875906220602&q=London&aqi=no');

            if (!response.ok) {
                throw new Error('Server Error!');
            }

            const data = await response.json();
            return data;

        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const weatherSlice = createSlice({
    name: 'weatherSlice',
    initialState: {
        weatherData: [],
        weatherStatus: null,
        weatherError: null
    },
    extraReducers: {
        [fetchWeatherData.pending]: (state) => {
            state.weatherStatus = 'Loading';
            state.weatherError = null;
        },
        [fetchWeatherData.fulfilled]: (state, action) => {
            state.weatherStatus = 'resolved';
            state.weatherData = action.payload;
        },
        [fetchWeatherData.rejected]: (state, action) => {
            state.weatherStatus = 'rejected';
            state.weatherError = action.payload;
        }
    }
});

export default weatherSlice.reducer;