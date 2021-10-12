import React, { Component } from 'react';
import france from '../images/france.png';
import wallpaper from '../images/wallpaper3.jpg';
import user1 from '../images/user1.png';
import '../styles/city-details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import DayCard from '../components/daycard.jsx'

library.add(fab)

class CityDetails extends React.Component {
    render() { 
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
                                <h6 className="degree-big">12°</h6>
                                <span className="weather-desc-today">CLOUDY</span>
                            </div>
                            <div class="row mt-4 ">
                                
                                <div class="col border-right ">
                                    <span className="humidity-wind" >HUMIDITY</span>
                                    <span className="humidity-wind">64%</span>
                                </div>
                                <div class="col">
                                    <span className="humidity-wind">WIND</span>
                                    <span className="humidity-wind">12 K/M</span>
                                
                                </div>
                            </div>
                            </div>
                    </div>
                    <div class="col albelta-col">
                        <span className="city-name">ALBELTA</span>
                    </div>
                </div>
                </div>
            </div>
                <div className="card-body extra">
                    <div className="card-body-container">
                    <div class="container">
                        <div class="row">
                            
                            <div class="col-4  xsmall left-section">
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                    <div>
                                        <FontAwesomeIcon className = "twitter-icon"icon={['fab', 'twitter']} />
                                        <span className="twitter-feed">Twitter Feed</span>
                                        <span className="france">#France</span>
                                    </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-2">
                                        <img className="profile-pic"src={user1}/>
                                    </div>
                                    <div class="col ">
                                    <div className="name-and-tweet">
                                        <span className="tweet-name">Jane Smith </span>
                                        <img className="twitter-verified-icon"src="https://img.icons8.com/fluency/48/000000/verified-badge.png"/>
                                        <span className="tweet-username">@janesmith</span>
                                        <h6 className="tweet-text">Don't forget your sunscreen tomorrow,Amazing weather in paris!</h6>
                                    </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-2">
                                        <img className="profile-pic"src={user1}/>
                                    </div>
                                    <div class="col">
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
                            <div class="col">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xxl-2 col-xl-2 col-lg-4 col-md-6 col-sm-6  mt-2  ">
                                        <div className="testo">
                                        <DayCard/>
                                        </div>
                                    </div>
                                    <div class="col-xxl-2 col-xl-2 col-lg-4 col-md-6 col-sm-6  mt-2 ">
                                        <div className="testo">
                                        <DayCard/>
                                        </div>
                                    </div>
                                    <div class="col-xxl-2 col-xl-2 col-lg-4 col-md-6 col-sm-6 mt-2 ">
                                        <div className="testo">
                                        <DayCard/>
                                        </div>
                                    </div>
                                    <div class="col-xxl-2 col-xl-2 col-lg-4 col-md-6 col-sm-6  mt-2 ">
                                    <div className="testo">
                                    <DayCard/>
                                        </div>
                                    </div>
                                    <div class="col-xxl-2 col-xl-2 col-lg-4 col-md-6 col-sm-6  mt-2 ">
                                        <div className="testo">
                                            <DayCard/>
                                        </div>
                                    </div>
                                    <div class="col-xxl-2  col-xl-2 col-lg-4 col-md-6 col-sm-6  mt-2 ">
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