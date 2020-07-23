import React,{Component} from 'react';
import WeatherLocation from './components/WeatherLocation';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <WeatherLocation city={"San Luis Potosi,mx"}></WeatherLocation>
    </div>
  );
}

export default App;
