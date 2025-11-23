import React from 'react';
import './style.scss';

import Hacks from "../hacks";
import Notes from "../notes";
import Experiments from "../experiments";
import Connect from "../connect";

import CardFeatured from 'yoga1290-ui-pool/react/card-featured';

import './hero.jpg'; //TODO: better way to trigger file-loader?

const goTo = (elId: string='_experiments') =>( ()=>(document.getElementById(elId).scrollIntoView()) );
const openNewTab = (url:string) => ( ()=>(window.open(url, '_blank')) );

export default () => (
    <div className="home-screen animate__animated animate__fadeInUp col-12">

        <div className='home-screen__hero col-12'>
            <CardFeatured 
                backgroundImageUrl='hero.jpg'
                backgroundShade={false}
                title='Story'
                text={<p style={ {lineHeight: 'normal'}}>
                    My development journey started during middle school where I was introduced to Java ME at an Evangelion anime fan-site,
                    <button style={ {lineHeight: 'normal'}}
                            onClick={openNewTab('http://gendou.com/forum/search.php?name=yoga')}
                            className='btn border-0 btn-outline-light b-inline my-0 py-0 mx-0 px-1'> Gendou.com (2005)
                            <span className='material-symbols-outlined align-middle'>open_in_new</span>
                    </button>
                    made couple of 
                    <button style={ {lineHeight: 'normal'}}
                            onClick={openNewTab('https://github.com/yoga1290/Nokia-3510i#readme')}
                            className='btn border-0 btn-outline-light b-inline my-0 py-0 mx-0 px-1'> MIDlets on my Nokia 3510i
                            <span className='material-symbols-outlined align-middle'>open_in_new</span>
                    </button>
                    which were helpful for school homeworks, IT Teacher invited me for some contests, random tech events in Uni, etc... and that was how CS came into my interest; probably, some mythologies & philosophy too 
                </p>}
                icon= 'keyboard_arrow_down'
                buttonText='See more'
                click={goTo('_experiments')}
            />
        </div>

        <h1 className='col-12 text-center' id='_experiments'>Experiments</h1>
        <Experiments />

        <div className='row'>
            <div className='col-12 col-sm-6'>
                <h1 className='col-12 text-center'>Hacks</h1>
                <div className='col-12'> <Hacks /> </div>
            </div>

            <div className='col-12 col-sm-6'>
                <h1 className='col-12 text-center'>Notes</h1>
                <div className='col-12'> <Notes /> </div>
            </div>
        </div>

        <h1 className='col-12 text-center'>Connect</h1>
        <Connect />
    </div>
)