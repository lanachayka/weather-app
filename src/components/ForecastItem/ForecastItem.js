export default function ForecastItem({ time, condition }) {
    return (
        <div className="forecastItem">
            <p>{time.slice(10, time.length - 3)}</p>
            <img src={condition.icon} alt={condition.text} />
            <p>{condition.text}</p>
        </div>
    )
}