import { useSelector } from 'react-redux';

export default function Header() {
    const { location } = useSelector(state => state.weather.weatherData);
    return (
        <div>
            <h1>Today in {location.name}</h1>
        </div>
    )
}