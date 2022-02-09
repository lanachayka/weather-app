import { useSelector } from "react-redux"
import { filterDate } from "./helper";

export default function Forecast() {
    const { forecastday } = useSelector(state => state.forecast.forecastData.forecast);
    return (
        <div>
            {forecastday.map(day => day.hour.filter(time => filterDate(
                time.time.slice(10, time.time.length - 3),
                time.time.slice(8, 10),
            ))
                .map(time => (
                    <div key={time.time_epoch}>
                        <p>{time.time.slice(10, time.time.length - 3)}</p>
                        <p>{time.condition.text}</p>
                        <img src={time.condition.icon} alt={time.condition.text} />
                    </div>
                )))
            }
        </div>
    )
}