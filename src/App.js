import React,{Component} from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ToolBar from '@material-ui/core/Toolbar';
import {Grid,Row,Col} from 'react-flexbox-grid';
import WeatherLocation from './components/WeatherLocation';
import logo from './logo.svg';
import './App.css';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
//import { MuiThemeProvider } from '@material-ui/core';

const cities=[
  "San Luis Potosi,mx",
  "Monterrey,mx",
  "Mexico,mx",
];

class App extends Component {
  constructor(){
    super();
    this.state={city:null};
  }

  handleSelectedLocation=city=>{
    this.setState({city});
    console.log(`handleSelectedLocation ${city}`);
  }
  render(){
    const {city}=this.state;
    return (
     
      <Grid fluid>
        <Row>
          <Col xs={12}>
          <AppBar title="Weather App">
            <ToolBar>
              <Typography variant='title' color='inherit'>
                Weather App
              </Typography>
            </ToolBar>
          </AppBar>
          </Col>
        </Row>        
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities}
          onSelectedLocation={this.handleSelectedLocation}>
          </LocationList> 
          </Col>
          <Col xs={12} md={6}>
            <Paper zDepth={4}>
              <div className="detail">
                {
                city&&
                <ForecastExtended city={city}>
                </ForecastExtended>
              
                
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
