import { useSelector } from "react-redux"

export default function Forecast() {
    const { forecastday } = useSelector(state => state.forecast.forecastData.forecast);
    return (
        <div>
            {forecastday.map(day => day.hour.map(time =>
            (
                <div key={time.time_epoch}>
                    <p>{time.time}</p>
                    <p>{time.condition.text}</p>
                    <img src={time.condition.icon} alt={time.condition.text} />
                </div>
            )))}
        </div>
    )
}