import React, { Component } from 'react';
import '../styles/daycard.css'
class DayCard extends React.Component {
    render() { 
        return <div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <span className="day-text">MON</span>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}
 
export default DayCard;