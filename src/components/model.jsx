import React, { Component } from 'react';
import '../styles/model.css';
class Modal extends React.Component {


    state = {

        data : undefined
    
      }
    
      getPosition = () => {
        return new Promise(function (resolve, reject) {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });    
      }

      getWeather = async (latitude, longitude) => { 
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=54ab43f1231a24a187a91bee0cdbc6a7&units=metric`);
        const data = await api_call.json(); 
    
        console.log(data); 
    
        this.setState({

            data : data.hourly
          
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




    render() { 
        return <div className="model-main-wrapper">
            <button type="button" className="butt" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            +
            </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">48 Hours Forecast</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="day-wrapper">
                        {this.state.data && this.state.data.map(day=>
                            <div className="card-custom">
                                <span className="hour">6:00 PM</span>
                                <span className="hour bold">{Math.round(day.temp + 32)}°</span>
                                <img className="model-icon"src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}/>
                                <span className="hour italic">{day.weather[0].description}</span>
                                
                                </div>
                        )}
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
        </div>;
    }
}
 
export default Modal;