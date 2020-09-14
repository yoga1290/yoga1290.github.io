import React from 'react';
import { HashRouter, Route } from 'react-router-dom'

import Menu from "./menu";
import Hacks from "./pages/hacks";
import Notes from "./pages/notes";
import Experiments from "./pages/experiments";
import Story from "./pages/story";
import Connect from "./pages/connect";

import './App.scss';

export default () => (
  <div>
            <HashRouter>
            <div className="row">
                
                <div className="col-lg-3 col-md-5 col-sm-4 col-xs-12">
                    <Menu />
                </div>
                <div className="col-lg-9 col-md-7 col-sm-8 col-xs-12">
                    
                    <Route exact 
                        path="/"
                        render={Story}
                    />
                    <Route exact 
                        path="/hacks"
                        component={Hacks}
                    />
                    <Route exact 
                        path="/notes"
                        component={Notes}
                    />
                    <Route exact 
                        path="/experiments"
                        component={Experiments}
                    />
                    <Route exact 
                        path="/connect"
                        component={Connect}
                    />

                </div>
            </div>
            </HashRouter>
        
        
    </div>
);