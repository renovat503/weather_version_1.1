import React, { Component } from 'react';
import logo from '../images/Bootstrap_logo.png';
import '../styles/navbar.css';
class NavBar extends React.Component {
    render() { 
        return <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
                        <div className="mode-toggle">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label class="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
                        </div>
                        </div>
                    </a>
                </div>
            </nav>
        </div>;
    }
}
 
export default NavBar;