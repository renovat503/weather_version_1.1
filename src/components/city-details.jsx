import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';
import wallpaper from '../images/wallpaper3.jpg';
import '../styles/city-details.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import DayCard from '../components/daycard.jsx'

library.add(fab)

class CityDetails extends React.Component {

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

        {ScrollReveal().reveal('.degree-big', { delay: 1000 })}
        {ScrollReveal().reveal('.albelta-col', { delay: 1000 })}
        
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

    render() { 

        //const icon = `http://openweathermap.org/img/wn/${this.state.icon}@2x.png`;
        const { temperatureF,humidity,wind_speed,description,city} = this.state;

        return <div>
            <div className="main-container">
            <div className="card  mb-3" style={{borderRadius: 20}}>
            <img style={{borderTopRightRadius: 20,borderTopLeftRadius: 20}}src={wallpaper} className="card-img-top" alt="..."/>
            <div class="card-img-overlay">

            <div class="container">
                <div class="row">
                    <div class="col">
                            <div class="container">
                            <div class="row">
                                <h6 className="degree-big">{temperatureF}°</h6>
                                <span className="weather-desc-today">{description}</span>
                            </div>
                            <div class="row mt-4 ">
                                
                                <div class="col border-right ">
                                    <span className="humidity-wind" >HUMIDITY</span>
                                    <span className="humidity-wind">{humidity}%</span>
                                </div>
                                <div class="col">
                                    <span className="humidity-wind">WIND</span>
                                    <span className="humidity-wind">{wind_speed} K/H</span>
                                
                                </div>
                            </div>
                            </div>
                    </div>
                    <div class="col albelta-col">
                        <span className="city-name">{city}</span>
                    </div>
                </div>
                </div>
            </div>
                <div className="card-body extra">
                    
                    <div className="card-body-container ">
                    <div class="container">
                        <div class="row ">
                            <div class="col ">
                            <div class="container ">
                            
                                <div class="row">
                                    <div class="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6  mt-2  ">
                                        <div className="testo">
                                        <DayCard/>
                                        </div>
                                    </div>
                                    <div class="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6  mt-2 ">
                                        <div className="testo">
                                        <DayCard/>
                                        </div>
                                    </div>
                                    <div class="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6  mt-2  ">
                                        <div className="testo">
                                        <DayCard/>
                                        </div>
                                    </div>
                                    <div class="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6  mt-2  ">
                                    <div className="testo">
                                    <DayCard/>
                                        </div>
                                    </div>
                                    <div class="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6  mt-2  ">
                                        <div className="testo">
                                            <DayCard/>
                                        </div>
                                    </div>
                                    <div class="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6  mt-2  ">
                                        <div className="testo">
                                            <DayCard/>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
 
export default CityDetails;