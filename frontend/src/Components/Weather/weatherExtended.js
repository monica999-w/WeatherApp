import "./weather.css"
import Card from 'react-bootstrap/Card';
import {useAppState} from "../../State/overmind";

function WeatherExtended(props){

    const {temperatureType} = useAppState()

    return(
        <div className="containercard">
            {props.forecast.map((data)=>{
                return(
                    <div key={data.id} className="daydata">
                        <Card>
                            <Card.Header style={{backgroundColor:"#196fa1"}}><div className="tempc">{props.getDayName(data.time)}</div></Card.Header>
                            <Card.Body>

                                <img alt="weatherimg" className="weatherim" src={data.icon}></img>
                                <Card.Text>
                                    <div className="infomationweather">
                                        <h5>Maximum Temperature: {data.max_temp[temperatureType.toLowerCase()]}° </h5>
                                        <h5>Minimum Temperature: {data.min_temp[temperatureType.toLowerCase()]}°</h5>
                                        <h5>Total precipitation: {data.totalprec}%</h5>
                                        <h5>Wind: {data.windkph}km/h</h5>
                                        <h5>Humidity: {data.avghumidity}%</h5>
                                    </div>
                                </Card.Text>
                                <Card.Text> Sunrise will be at: {data.sunrise} and Sunset at: {data.sunset} </Card.Text>
                            </Card.Body>
                        </Card>

                    </div>);
            })}
        </div>
    );}
export default WeatherExtended;