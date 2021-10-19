import React from 'react';
import sunny from '../images/sunny2.svg';
import rainy from '../images/rainy.svg';
import '../styles/daycard.css'
class DayCard extends React.Component {
    render() { 
        return <div className="card-wrapper">
            
                            <span className="day-text">MON</span>
                            <div className="weather-icon">
                                <img  className="icon-weather"src="http://openweathermap.org/img/wn/13d@2x.png"alt="..."/>
                            </div>
                            <span className="degree-text">15°</span>
                            <span className="weather-desc">SUNNY</span>
                </div>
    }
}
 
export default DayCard;