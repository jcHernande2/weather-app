import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css'
/*
const days=[
    'Lunes',
    'Marte',
    'Miercoles',
    'Jueves',
    'Viernes'
]
const data={
    temperature:10,
    humidity:10,
    weatherState:'normal',
    wind:'normal',
};*/
const api_key="8f5e66e5e49317fb163cf2b39b1d828c";
const url_base_weather="http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component{
    constructor(){
        super();
        this.state={forecastData:null};
    }
    renderForecastItemDays(forecastData){
        
        return forecastData.map(forcast=>(
            <ForecastItem 
                key={`${forcast.weekDay}${forcast.hour}`} 
                weekDay={forcast.day}
                hour={forcast.hour} 
                data={forcast.data}>
            </ForecastItem>));
    }
    componentDidMount()
    {
        //fetch or axios
        this.updateCity(this.props.city);
    } 
    componentWillReceiveProps(nextProps) {
        if(nextProps.city!==this.props.city)
        {
            this.setState({forecastData:null})
            this.updateCity(this.props.city);
        }
    }
    
    updateCity=city=>{
        const url_forecast=`${url_base_weather}?q=${city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data=>(data.json())
        ).then(
            weather_data=>{
                console.log({weather_data});
                const forecastData =transformForecast(weather_data);
                console.log(forecastData);
                this.setState({forecastData});
            }
        )
    }
    renderProgress(){
        return <h3>cargando pronostico extenedido</h3>;
    }
    render(){
        const {city}=this.props;
        const {forecastData}=this.state;
        
        return(
        <div>
            <h2 className="forecast-title">Pronostico Extendido {city}</h2>
            {forecastData?
            this.renderForecastItemDays(forecastData)
            :this.renderProgress()
            }
        </div>);
    }
} 
ForecastExtended.propTypes={
    city:PropTypes.string.isRequired,
}
export default ForecastExtended;