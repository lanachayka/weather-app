import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchForecastWeatherData = createAsyncThunk('forecast/fetchForecastWeatherData',
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=0730661e7d8f491886875906220602&q=London&days=2&aqi=no&alerts=no');

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

const forecastSlice = createSlice({
    name: 'forecastSlice',
    initialState: {
        forecastData: [],
        forecastStatus: null,
        forecastError: null
    },
    extraReducers: {
        [fetchForecastWeatherData.pending]: (state) => {
            state.forecastStatus = 'Loading';
            state.forecastError = null;
        },
        [fetchForecastWeatherData.fulfilled]: (state, action) => {
            state.forecastStatus = 'resolved';
            state.forecastData = action.payload;
        },
        [fetchForecastWeatherData.rejected]: (state, action) => {
            state.forecastStatus = 'rejected';
            state.forecastError = action.payload;
        },
    }
});

export default forecastSlice.reducer;