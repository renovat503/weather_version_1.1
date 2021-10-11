import React, { Component } from 'react';
import france from '../images/france.png';
import '../styles/city-details.css';
class CityDetails extends React.Component {
    render() { 
        return <div>
            <div className="main-container">
            <div className="card mb-3" style={{borderRadius: 20}}>
            <img style={{borderTopRightRadius: 20,borderTopLeftRadius: 20}}src={france} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="card-body-container">
                    </div>
                </div>
            </div>
        </div>
        </div>
    }
}
 
export default CityDetails;