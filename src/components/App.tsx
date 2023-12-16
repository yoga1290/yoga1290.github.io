import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom'

import Header from "../components/shared/header";

import Hacks from "./pages/hacks";
import Notes from "./pages/notes";
import Experiments from "./pages/experiments";
// import Story from "./pages/story";
import Connect from "./pages/connect";

import './App.scss';

export default () => (
  <div>            
            <HashRouter>
               <Header />
                <div className="container-fluid">
                    <div className="mx-auto col-lg-10 col-md-10 col-sm-12 col-xs-12">
                        <Routes>
                            {/* <Route 
                                path="/"
                                element={<Story/>}
                            /> */}
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