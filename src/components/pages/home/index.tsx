import React from 'react';
import './style.scss';

import Hacks from "../hacks";
import Notes from "../notes";
import Experiments from "../experiments";
import Connect from "../connect";

import CardFeatured from 'yoga1290-ui-pool/react/card-featured';

import './hero.jpg'; //TODO: better way to trigger file-loader?

const goTo = (url: string) =>( ()=>(location.href=url) );
const openNewTab = (url:string) => ( ()=>(window.open(url, '_blank')) );

export default () => (
    <div className="home-screen animate__animated animate__fadeInUp col-12">

        <div className='home-screen__hero col-12'>
            <CardFeatured 
                backgroundImageUrl='hero.jpg'
                title='Story'
                text={<p style={ {lineHeight: 'normal'}}>
                    My development journey started during middle school where I was introduced to Java ME at an anime fan-site,
                    made couple of 
                    <button style={ {lineHeight: 'normal'}}
                            onClick={openNewTab('https://github.com/yoga1290/Nokia-3510i#readme')}
                            className='btn border-0 btn-outline-light b-inline my-0 py-0 mx-0 px-1'> MIDlets on my Nokia 3510i
                            <span className='material-symbols-outlined align-middle'>open_in_new</span>
                    </button>
                    which were helpful for school homeworks... and that was probably how I discovered CS!
                </p>}
                icon='code_blocks'
                buttonText='See more'
                click={goTo('/#experiments')}
            />
        </div>

        <h1 className='col-12 text-center'>Experiments</h1>
        <Experiments />
        <h1 className='col-12 text-center'>Hacks</h1>
        <Hacks />
        <h1 className='col-12 text-center'>Notes</h1>
        <Notes />
        <h1 className='col-12 text-center'>Connect</h1>
        <Connect />
    </div>
)