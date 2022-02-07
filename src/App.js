import './App.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData } from './store/weatherSlice';
import Header from './components/Header/Header';

function App() {
  const dispatch = useDispatch();
  const { weatherData, status, error } = useSelector(state => state.weather);

  useEffect(() => {
    dispatch(fetchWeatherData());
  }, [dispatch]);

  if (status === 'Loading') {
    return <h1>Loading</h1>
  }

  if (error) {
    return <h2>An error occured {error}</h2>
  }

  if (weatherData.location && weatherData.current) {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
  else {
    return null
  }
}

export default App;
