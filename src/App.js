<<<<<<< HEAD
import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import CityDetails from './components/city-details';
import Footers from './components/footers';


class App extends React.Component {

render(){
  
=======
import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import CityDetails from './components/city-details';
import Footer from './components/footer';


class App extends Component {

  state = {
    lat: undefined,
    lon: undefined,  
    city: undefined,
    temperatureF: undefined,
    icon: undefined,
    errorMessage: undefined,
    humidity:undefined,
    wind_speed:undefined,
    description:undefined,
    icon : undefined

  }

  getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });    
  }
  
  
  getWeather = async (latitude, longitude) => { 
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=54ab43f1231a24a187a91bee0cdbc6a7&units=metric`);
    const data = await api_call.json(); 

    const api_call2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=54ab43f1231a24a187a91bee0cdbc6a7`);
        const data2 = await api_call2.json();

    console.log(data);   
    console.log(data2);

    this.setState({
      lat: latitude,
      lon: longitude,
      city: data2.name.toUpperCase(),
      temperatureF:data.current.temp,
      icon: data.current.weather[0].icon,
      humidity:data.current.humidity,
      wind_speed:data.current.wind_speed,
      description : data.current.weather[0].main.toUpperCase(),
      icon : data.current.weather[0].icon
    })
  }

  componentDidMount() {
    this.getPosition()
    .then((position) => {      
      this.getWeather(position.coords.latitude, position.coords.longitude)
    })
    
    .catch((err) => {
      this.setState({ errorMessage: err.message });
    });

    this.timerID = setInterval(        
      () => 
      this.getWeather(this.state.lat, this.state.lon),
      60000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render(){

    const icon = `http://openweathermap.org/img/wn/${this.state.icon}@2x.png`;
    const { lat,lon,temperatureF,humidity,wind_speed,description} = this.state;
>>>>>>> 15270700c9c96107ffe349c656270827774367e6
  return (
    <div className="App">
      <div className="main">
        <NavBar/>
        <div className="container">
          <CityDetails 
          temperature ={temperatureF}
          latitude ={lat} 
          longitude ={lon}
          humidity={humidity}
          wind_speed={wind_speed}
          latitude={this.state.lat}
          longitude={this.state.lon}
          description={description}
          city={this.state.city}
          icon={icon}/>
        </div>
      </div>
<<<<<<< HEAD
      <Footers/>
=======
      <Footer/>
>>>>>>> 15270700c9c96107ffe349c656270827774367e6
    </div>
  );

  }
}
}

export default App;
