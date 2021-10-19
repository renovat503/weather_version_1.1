import React from 'react';
import ScrollReveal from 'scrollreveal';
import wallpaper from '../images/wallpaper3.jpg';
import user1 from '../images/user1.png';
import '../styles/city-details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import DayCard from '../components/daycard.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

library.add(fab)

class CityDetails extends React.Component {


    componentDidMount() {
        {ScrollReveal().reveal('.degree-big', { delay: 1000 })}
        {ScrollReveal().reveal('.albelta-col', { delay: 1000 })}
    }

    handleDismiss=()=>{
        document.getElementById('alert').style.display='none';
    }
       
    render() { 

        let alert 

        if(this.props.temperature > 5){


            alert = <div id="alert"class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Acceptable Temperature !</strong> You should check in on some of those fields below.
                        <button onClick={this.handleDismiss}type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
        }else{

            alert = <div id="alert"class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                        <button onClick={this.handleDismiss} type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

        }

        return <div>
            <div className="main-container">
            {alert}
            <div className="card  mb-3" style={{borderRadius: 20}}>
            <img style={{borderTopRightRadius: 20,borderTopLeftRadius: 20}}src={wallpaper} className="card-img-top" alt="..."/>
            <div className="card-img-overlay">
            <div className="container">
                <div className="row">
                    <div className="col">
                            <div className="container">
                            <div className="row">
                            
                                <h6 className="degree-big">{this.props.temperature}°</h6>
                                <span className="weather-desc-today">{this.props.description}</span>
                            </div>
                            <div className="row mt-4 ">
                                
                                <div className="col border-right ">
                                    <span className="humidity-wind" >HUMIDITY</span>
                                    <span className="humidity-wind">{this.props.humidity}%</span>
                                </div>
                                <div className="col">
                                    <span className="humidity-wind">WIND SPEED</span>
                                    <span className="humidity-wind">{this.props.wind_speed}</span>
                                
                                </div>
                            </div>
                            </div>
                    </div>
                    <div className="col albelta-col">
                        <span className="city-name">{this.props.city}</span>
                        <img src={this.props.icon}alt="..."/>
                    </div>
                </div>
                </div>
            </div>
                <div className="card-body extra">
                    <div className="card-body-container">
                    <div className="container">
                        <div className="row">
                            
                            <div className="col-4  xsmall left-section">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                    <div>
                                        <FontAwesomeIcon className = "twitter-icon"icon={['fab', 'twitter']} />
                                        <span className="twitter-feed">Tweet feeds</span>
                                        <span className="france">#France</span>
                                    </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-2">
                                        <img className="profile-pic"src={user1}/>
                                    </div>
                                    <div className="col ">
                                    <div className="name-and-tweet">
                                        <span className="tweet-name">Jane Smith </span>
                                        <img className="twitter-verified-icon"src="https://img.icons8.com/fluency/48/000000/verified-badge.png"/>
                                        <span className="tweet-username">@janesmith</span>
                                        <h6 className="tweet-text">Don't forget your sunscreen tomorrow,Amazing weather in paris!</h6>
                                    </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-2">
                                        <img className="profile-pic"src={user1}/>
                                    </div>
                                    <div className="col">
                                    <div className="name-and-tweet">
                                        <span className="tweet-name">Jane Smith </span>
                                        <img className="twitter-verified-icon"src="https://img.icons8.com/fluency/48/000000/verified-badge.png"/>
                                        <span className="tweet-username">@janesmith</span>
                                        <h6 className="tweet-text">Don't forget your sunscreen tomorrow,Amazing weather in paris!</h6>
                                    </div>
                                    </div>
                                </div>
                                </div>
                             </div>
                            <div className="col">
                            <div className="container">
                                <div className="row">

                                {this.props.dailyWeather ? this.props.dailyWeather.map(day => <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-6 col-sm-6  mt-2 ">
                                                                    <DayCard icon={day.weather[0].icon} 
                                                                             description={day.weather[0].main.toUpperCase()} 
                                                                             temperature={day.temp.day}/>
                                                                </div> ) : <div class="spinner-border text-info" role="status">
                                                                                <span class="visually-hidden">Loading...</span>
                                                                            </div>}
                                    
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