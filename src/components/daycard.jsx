import React from 'react';
import '../styles/daycard.css';
class DayCard extends React.Component {
    render() { 

        const {temperature,description} = this.props;
        const icon = `http://openweathermap.org/img/wn/${this.props.icon}@2x.png`;
        return <div className="card-wrapper">
            
                            <span className="day-text">MON</span>
                            <div className="weather-icon">
                                <img  className="icon-weather"src={icon}alt="..."/>
                            </div>
                            <span className="degree-text">{temperature}</span>
                            <span className="weather-desc">{description}</span>
                </div>
    }
}
 
export default DayCard;