import React from 'react';
import { HashRouter, Route } from 'react-router-dom'

import Header from "../components/shared/header";

import Hacks from "./pages/hacks";
import Notes from "./pages/notes";
import Experiments from "./pages/experiments";
import Story from "./pages/story";
import Connect from "./pages/connect";

import './App.scss';

export default () => (
  <div>            
            <HashRouter>
               <Header />
                <div className="container-fluid">
                    <div className="mx-auto col-lg-10 col-md-10 col-sm-12 col-xs-12">
                        
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