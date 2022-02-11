import { useSelector } from "react-redux"
import ForecastItem from "../ForecastItem/ForecastItem";
import { filterDate } from "./helper";

export default function Forecast() {
    const { forecastday } = useSelector(state => state.forecast.forecastData.forecast);
    return (
        <div className="forecast">
            {forecastday.map(day => day.hour.filter(time => filterDate(
                time.time.slice(10, time.time.length - 3),
                time.time.slice(8, 10),
            ))
                .map(time => (
                    <ForecastItem
                        key={time.time_epoch}
                        time={time.time}
                        condition={time.condition}
                    />
                )))
            }
        </div>
    )
}