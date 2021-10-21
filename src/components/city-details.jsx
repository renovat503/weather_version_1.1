import React from 'react';
import ScrollReveal from 'scrollreveal';
import wallpaper from '../images/wallpaper3.jpg';
import '../styles/city-details.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import DayCard from '../components/daycard.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Model from '../components/model'
import { now } from 'jquery';

library.add(fab)

class CityDetails extends React.Component {

//WARNING! To be deprecated in React v17. Use componentDidMount instead.
    
    componentDidMount() {
        {ScrollReveal().reveal('.degree-big', { delay: 1000 })}
        {ScrollReveal().reveal('.albelta-col', { delay: 1000 })}
    }

    handleDismiss=()=>{
        document.getElementById('alert').style.display='none';
    }
    handleClick=()=>{
        alert("clicked");
    }


 



//Handling Days TESTING

handleDaysTest=(daily)=>{

    const arr = ['MON','TUE','WED','THU','FRI','SAT','SUN','MON','TUE','WED','THU','FRI','SAT','SUN'];
    const d = new Date();
    let today = d.getDay();
    let finalIndex
   
    if(daily === 0){
        finalIndex = arr[today];
    }else if(daily === 1){
        finalIndex = arr[today + 1];

    }else if(daily === 2){
        finalIndex = arr[today + 2];

    }else if(daily === 3){
        finalIndex = arr[today + 3];

    }else if(daily === 4){
        finalIndex = arr[today + 4];

    }else if(daily === 5){
        finalIndex = arr[today + 5];

    }else if(daily === 6){
        finalIndex = arr[today + 6];

    }else if(daily === 7){
        finalIndex = arr[today + 7];

    }

   
    return finalIndex;
        


  
  }

  displayDate = () =>{
    let today = new Date();
    let week = ['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY','SUNDAY'];
    let months = ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];
    let currentDay = week[today.getDay() - 1];
    let currentMonth = months[today.getMonth()];
    let date = currentDay +' '+currentMonth +' '+today.getDate()+' '+ today.getFullYear();
    return date;
  }
       
    render() { 


   let alert = <div id="alert"class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Welcom to Umbrella !</strong> No alert to show at this Moment. Be safe Out there !
                        <button onClick={this.handleDismiss}type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
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
                                <Model data={this.props.dailyWeather}/>
                                <h6 className="degree-big">{Math.round(this.props.temperature)}°</h6>
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
                        <span className="today-date">{this.displayDate()}</span>
                    </div>
                </div>
                </div>
            </div>
                <div className="card-body extra">
                    <div className="card-body-container">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                            <div className="container">
                                <div className="row">

                                {this.props.dailyWeather ? this.props.dailyWeather.map((day,index)=> <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-6 col-sm-6  mt-2 ">
                                                                    <DayCard displayDay={()=>this.handleDaysTest(index)}
                                                                             icon={day.weather[0].icon} 
                                                                             description={day.weather[0].main.toUpperCase()} 
                                                                             temperature={day.temp.day}/>
                                                                </div>) : <div class="spinner-border text-info" role="status">
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