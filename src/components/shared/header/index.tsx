import React from 'react';
import {
    NavLink,
} from "react-router-dom";

import './style.scss';

export default () => {
    return <header>
        <nav className="navbar navbar-dark bg-dark  sticky-top">
            <div className="container px-0 mx-0 col-12 d-flex justify-content-between">

                <a href="#"
                    className="navbar-brand text-center col-sm-12 col-md-3">
                    <strong>Youssef Shehab</strong>
                </a>
                
                <div className="navbar-nav col-sm-12 col-md-7">
                <ul className="nav justify-content-between">

                    <li className="nav-item text-center">
                        <NavLink to={`/`} className="nav-link text-center">
                            <span className="material-icons align-middle">biotech</span>
                            <div className="d-sm-block d-md-inline align-middle">Experiments</div>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to={`/hacks`} className="nav-link text-center">
                            <span className="material-icons align-middle">grid_view</span>
                            <div className="d-sm-block d-md-inline align-middle">Hacks</div>
                        </NavLink>
                    </li>

                    <li className="nav-item text-center">
                        <NavLink to={`/notes`} className="nav-link text-center">
                            <span className="material-icons align-middle">edit_note</span>
                            <div className="d-sm-block d-md-inline align-middle">Notes</div>
                        </NavLink>
                    </li>

                    <li className="nav-item text-center">
                        <NavLink to={`/connect`} className="nav-link text-center">
                            <span className="material-icons align-middle">badge</span>
                            <div className="d-sm-block d-md-inline align-middle">Connect</div>
                        </NavLink>
                    </li>
                    
                </ul>
                </div>
            </div>

            
        </nav>
        
        
    </header>
}