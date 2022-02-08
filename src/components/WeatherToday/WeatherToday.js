import { useSelector } from 'react-redux';

export default function WeatherToday() {
    const { current } = useSelector(state => state.weather.weatherData); 
    return (
        <div className="weatherToday">
            <h2 className="weatherToday title">{current.condition.text}</h2>
            <img className="weatherToday icon" src={current.condition.icon} alt={current.condition.text} />
            <div className="weatherToday temperature">
                <p>Temperature: 
                    <span> {current.temp_c} °C</span>
                </p>
                <p>Feels like: 
                    <span> {current.feelslike_c} °C</span>
                </p>
            </div>
        </div>
    )
}