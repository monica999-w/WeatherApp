import "./weather.css"
import {useAppState} from "../../State/overmind";
import WeatherSwitch from "../weatherSwitch";
import WeatherExtended from "./weatherExtended";


function WeatherCurrent(props) {

    const {temperatureType} = useAppState()

    const getDayName = (date, locale) => {
        let dateObject = new Date(date);
        return dateObject.toLocaleDateString(locale, {weekday: 'long'});
    }

    const getForecast = () => {
        let forecast = [];
        let data = props.weatherInfo;
        let day = 0;
        for (day; day < data.daycount; day++) {
            forecast.push(data.getDay(day));
        }

        return forecast;
    }

    console.log({temperatureType})


    return (
        <div>
            <div className='weathercurrent'>
                <div className='cityweather'>
                    <div className='barswich'>
                        <h1 className='name'>Current Weather</h1>
                        <p className='namebar'><WeatherSwitch/></p>
                    </div>
                    <div>
                        <h1 className="city"> {props.weatherInfo.name}</h1>
                    </div>
                    <div className='weatherAfisare'>
                        <img className='imgw' src={props.weatherInfo.icon} alt='imgw'/>
                        <p className='temperatura'>{temperatureType === 'C' ? props.weatherInfo.temp_c : props.weatherInfo.temp_f}°</p>
                    </div>
                    <h1 className='weatherStare'>{props.weatherInfo.text},Feels
                        like: {temperatureType === 'C' ? props.weatherInfo.feelslike_c : props.weatherInfo.feelslike_f}°</h1>
                    <div className='weatherStare'>
                        Humidity: {props.weatherInfo.humidity}%
                    </div>

                </div>
            </div>
            <div className='extendedforecast'>
                <h1 className='name'>Extended Forecast</h1>
                <div className='forecast'>
                    {getForecast().slice(1).map((data) => {
                        return (
                            <div key={data.id} className="daydata">

                                {getDayName(data.time)}
                                <img alt="weatherimg" src={data.icon}/>
                                <h1 className='forecastStare'>{data.text}</h1>
                                {data.temp[temperatureType.toLowerCase()]}°
                            </div>);
                    })}

                </div>


            </div>
            <WeatherExtended getDayName={getDayName} forecast={getForecast()}/>
        </div>

    );
}

export default WeatherCurrent;