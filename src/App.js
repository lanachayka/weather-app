import './App.less';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData } from './store/weatherSlice';
import Header from './components/Header/Header';
import WeatherToday from './components/WeatherToday/WeatherToday';

function App() {
  const dispatch = useDispatch();
  const { weatherData, status, error } = useSelector(state => state.weather);

  useEffect(() => {
    dispatch(fetchWeatherData());
  }, [dispatch]);

  if (status === 'Loading') {
    return <div className="App"><h1>Loading...</h1></div>
  }

  if (error) {
    return <div className="App"><h2>An error occured {error}</h2></div>
  }

  if (weatherData.location && weatherData.current) {
    return (
      <div className="App">
        <Header />
        <WeatherToday />
      </div>
    );
  }
  else {
    return null
  }
}

export default App;