import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom'

import Header, { HeaderProp } from "yoga1290-ui-pool/react/header";

import Home from "./pages/home";
import Hacks from "./pages/hacks";
import Notes from "./pages/notes";
import Experiments from "./pages/experiments";
import Connect from "./pages/connect";

import './App.scss';

const headerProps: HeaderProp = {
    brand: 'Youssef Shehab',
    items: [{
        title: 'Experiments',
        link: '/experiments',
        icon: 'biotech'
    }, {
        title: 'Hacks',
        link: '/hacks',
        icon: 'grid_view'
    }, {
        title: 'Notes',
        link: '/notes',
        icon: 'text_snippet'
    }, {
        title: 'Connect',
        link: '/connect',
        icon: 'badge'
    }]
};

export default () => (
  <div>            
            <HashRouter>
                <Header brand={headerProps.brand}
                        items={headerProps.items} />
                <div className='d-sm my-5 py-3 d-md-none'></div>
                <div className='d-md my-3 py-2'></div>
                <div className="container-fluid">
                    <div className="mx-auto col-lg-10 col-md-10 col-sm-12 col-12">
                        <Routes>
                            <Route 
                                path="/hacks"
                                element={<Hacks/>}
                            />
                            <Route 
                                path="/notes"
                                element={<Notes/>}
                                
                            />
                            <Route 
                                path="/"
                                element={<Home/>}
                            />
                            <Route
                                path="/experiments"
                                element={<Experiments/>}

                            />
                            <Route 
                                path="/connect"
                                element={<Connect/>}

                            />
                        </Routes>
                    </div>
                </div>
            </HashRouter>
            
    </div>
);