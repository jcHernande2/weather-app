import React,{Component} from 'react';
import {Grid,Row,Col} from 'react-flexbox-grid'
import WeatherLocation from './components/WeatherLocation';
import logo from './logo.svg';
import './App.css';
import LocationList from './components/LocationList';
import { MuiThemeProvider } from '@material-ui/core';

const cities=[
  "San Luis Potosi,mx",
  "Monterrey,mx",
  "Mexico,mx",
];

class App extends Component {
  handleSelectedLocation=city=>{
    console.log(`handleSelectedLocation ${city}`);
  }
  render(){
    return (
      <MuiThemeProvider>
      <Grid fluid>
        <Row>
          <h1>Grid Sistem</h1>
        </Row>
        <Row>
          <h1>Las Columnas</h1>
        </Row>
        <Row>
          <Col xs={2} md={3}>
            <div className="red">Hello, world!</div>
          </Col>
          <Col xs={2} md={3}>
            <div className="green">Hello, world!</div>
          </Col>
          <Col xs={2} md={3}>
            <div className="blue">Hello, world!</div>
          </Col>
          <Col xs={6} md={3}>
            <div className="yellow">Hello, world!</div>
          </Col>
        </Row>
      </Grid>
      
      {/*
      <div className="App">
        <LocationList cities={cities}
        onSelectedLocation={this.handleSelectedLocation}
        >
        </LocationList>      
      </div>*/}
      </MuiThemeProvider>
    );
  }
}

export default App;
