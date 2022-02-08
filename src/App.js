import './App.less';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData } from './store/weatherSlice';
import { fetchForecastWeatherData } from './store/forecastSlice';
import Header from './components/Header/Header';
import WeatherToday from './components/WeatherToday/WeatherToday';
import Forecast from './components/Forecats/Forecast';

function App() {
  const dispatch = useDispatch();
  const { weatherData, weatherStatus, weatherError } = useSelector(state => state.weather);
  const { forecastData, forecastStatus, forecastError } = useSelector(state => state.forecast);

  useEffect(() => {
    dispatch(fetchWeatherData());
    dispatch(fetchForecastWeatherData());
  }, [dispatch]);

  if (weatherStatus === 'Loading' || forecastStatus === 'Loading') {
    return <div className="App"><h1>Loading...</h1></div>
  }

  if (weatherError || forecastError) {
    return <div className="App"><h2>An error occured {weatherError || forecastError}</h2></div>
  }

  if (weatherData.location && weatherData.current && forecastData.forecast.forecastday.length > 0) {
    return (
      <div className="App">
        <Header />
        <WeatherToday />
        <Forecast />
      </div>
    );
  }
  else {
    return null
  }
}

export default App;
