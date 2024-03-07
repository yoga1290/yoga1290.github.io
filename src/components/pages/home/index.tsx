import React from 'react';
import './style.scss';

import Hacks from "../hacks";
import Notes from "../notes";
import Experiments from "../experiments";
import Connect from "../connect";

import CardFeatured from 'yoga1290-ui-pool/react/card-featured';


const goTo = (url: string) =>( ()=>(location.href=url) );

export default () => (
    <div className="home-screen animate__animated animate__fadeInUp col-12">

        <div className='col-12'>
            <CardFeatured 
                title='Story'
                text={<>
                    My development journey started during middle school where I was introduced to Java ME at an anime fan-site,
                    made couple of <a href="https://github.com/yoga1290/Nokia-3510i#readme" target="_blank"> experiments on my Nokia 3510i.</a>
                    which track fast my school homeworks... and that's how CS enlightened me!
                </>}
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