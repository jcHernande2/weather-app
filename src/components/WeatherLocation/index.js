import React,{Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import{
    SUN,
    WINDY,
} from '../../constants/weathers';
const data={
    temperature:7,
    weatherState:SUN,
    humidity:10,
    wind:'10m/s'
}

const data2={
    temperature:9,
    weatherState:WINDY,
    humidity:11,
    wind:'12m/s'
}
const location="London";
const api_key="8f5e66e5e49317fb163cf2b39b1d828c";
const url_base_wether="http://api.openweathermap.org/data/2.5/weather";
const api_weather=`${url_base_wether}?q=${location}&appid=${ api_key}`;
class WeatherLocation extends Component{
    constructor(){
        super();
        this.state={
          city:"Slp mexico",
          data:data, 
        };
    }
    getWeatherState=weather_data=>{
        return SUN;
    }
    getData=weather_data=>{
        const {humidity,temp}=weather_data.main;
        const {speed}=weather_data.wind;
        const weatherState=this.getWeatherState();
        const data={
            humidity,
            temperature:temp,
            weatherState,
            wind:`${speed} m/s`,
        }
        return data;
    }
    handleUpdateClick=()=>{
        fetch(api_weather).then(resolve=>{         
            return resolve.json();
        }).then(data=>{
            const newWeather=this.getData(data)
            console.log(newWeather);
            debugger;
            this.setState({
                data:newWeather
            });
        });       
    }
    render(){
        const {city,data}=this.state;
        return (<div className="weatherLocationCont">
        <Location city={city}></Location>
        <WeatherData data={data}></WeatherData>
        <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>        
        );
    } 
}

export default WeatherLocation;