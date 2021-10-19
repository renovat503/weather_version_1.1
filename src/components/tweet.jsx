import React, { Component } from 'react';
import user1 from '../images/user1.png';
import '../styles/city-details.css';
class Tweet extends React.Component {
    render() { 
        return <div>
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
        </div>;
    }
}
 
export default Tweet;