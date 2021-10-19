import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import CityDetails from './components/city-details';
import Footers from './components/footers';
import { data } from 'jquery';


class App extends React.Component {


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
    icon : undefined,
    daily_weather : undefined

  }

  getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });    
  }
  
  
  getWeather = async (latitude, longitude) => { 
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=54ab43f1231a24a187a91bee0cdbc6a7&units=metric`);
    const data = await api_call.json(); 

    const api_call2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=54ab43f1231a24a187a91bee0cdbc6a7&units=metric`);
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
      description : data.current.weather[0].description.toUpperCase(),
      icon : data2.weather[0].icon,
      daily_weather:data.daily
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
      600000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }


  render(){

    const icon = `http://openweathermap.org/img/wn/${this.state.icon}@2x.png`;
    const { lat,lon,temperatureF,humidity,wind_speed,description,daily_weather,city} = this.state;

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
          latitude={lat}
          longitude={lon}
          description={description}
          city={city}
          icon={icon}
          dailyWeather={daily_weather}/>
        </div>
      </div>
      <Footers/>
    </div>
  );

  }
}


export default App;
