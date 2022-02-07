import { useSelector } from 'react-redux';

export default function Header() {
    const { location } = useSelector(state => state.weather.weatherData);
    return (
        <div className="header">
            <h1>Weather in {location.name}</h1>
        </div>
    )
}