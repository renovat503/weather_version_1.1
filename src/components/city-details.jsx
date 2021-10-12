import React, { Component } from 'react';
import france from '../images/france.png';
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
            <img style={{borderTopRightRadius: 20,borderTopLeftRadius: 20}}src={france} className="card-img-top" alt="..."/>
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