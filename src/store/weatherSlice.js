import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchWeatherData = createAsyncThunk('weather/fetchWeatherData',
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetch('http://api.weatherapi.com/v1/current.json?key=0730661e7d8f491886875906220602&q=London&aqi=no');

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

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
};

const weatherSlice = createSlice({
    name: 'weatherSlice',
    initialState: {
        weatherData: [],
        status: null,
        error: null
    },
    extraReducers: {
        [fetchWeatherData.pending]: (state) => {
            state.status = 'Loading';
            state.error = null;
        },
        [fetchWeatherData.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.weatherData = action.payload;
        },
        [fetchWeatherData.rejected]: setError,
    }
});

export default weatherSlice.reducer;