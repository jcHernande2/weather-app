import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation=()=>(
    <div>
        <Location city={"San Luis Potosí, México"}></Location>
        <WeatherData></WeatherData>
    </div>
);

export default WeatherLocation;