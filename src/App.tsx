import React from 'react';
import Header, { HeaderProp } from "yoga1290-ui-pool/react/header";
import Home from "./pages/home";
import './App.scss';

const scrollTo = (section: string='backend') =>(
     ()=> (
        window.document.querySelector(`.${section}-section`)?.scrollIntoView()
    ));

const headerProps: HeaderProp = {
    brand: 'Youssef Shehab',
    items: [{
        title: 'Menu',
        icon: 'menu',
        callback: scrollTo('home')
    }, {
        title: 'Connect',
        icon: 'badge',
        callback: scrollTo('connect')
    }]
};

export default () => (
    <div>

        <Header brand={headerProps.brand}
                items={headerProps.items} />

        <div className='d-sm d-md-none my-3 py-4'></div>
        <div className='d-md my-3 py-2 d-none d-md-block'></div>
        <div className="home-section container-fluid">
            <div className="mx-auto col-lg-10 col-md-10 col-sm-12 col-12">
                <Home/>
            </div>
        </div>
    </div>
);