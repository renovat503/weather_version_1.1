import React from 'react';
import logo from '../images/u.png';
import '../styles/navbar.css';

class NavBar extends React.Component {
    render() { 
        return <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" width="45" height="42" className="d-inline-block align-text-top"/>
                        <div className="mode-toggle">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
                        </div>
                        </div>
                    </a>
                </div>
            </nav>
        </div>;
    }
}
 
export default NavBar;