import React, { Component } from 'react';
import logo from '../images/u.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)
class Footers extends React.Component {
    render() { 
        return <div>
            <div className="container-fluid">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <img className="bi" width="25" height="22" src={logo} alt="..."/>
                    </a>
                    <span className="text-muted">&copy; 2021 Umbrella, Inc</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="#"><FontAwesomeIcon className="bi" width="24" height="24"icon={['fab', 'instagram']} /></a></li>
                    <li className="ms-3"><a className="text-muted" href="#"><FontAwesomeIcon className="bi" width="24" height="24"icon={['fab', 'twitter']} /></a></li>
                    <li className="ms-3"><a className="text-muted" href="#"><FontAwesomeIcon className="bi" width="24" height="24"icon={['fab', 'facebook']} /></a></li>
                    </ul>
                </footer>
                </div>
        </div>;
    }
}
 
export default Footers;