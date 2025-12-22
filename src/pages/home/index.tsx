import React from 'react';
import './style.scss';

import Connect from "./connect-section";
import CardFeatured from 'yoga1290-ui-pool/react/card-featured';

import './hero.jpg'; //TODO: better way to trigger file-loader?
import PanelFeatured from 'yoga1290-ui-pool/react/panel-featured';
import CardWithIcon from 'yoga1290-ui-pool/react/card-with-icon';

import Sections, { Metadata } from './sections';

const scrollTo = (section: string='backend') =>(
     ()=> (
        window.document.querySelector(`.${section}-section`)?.scrollIntoView()
    ));
const openNewTab = (url:string) => ( ()=>(window.open(url, '_blank')) );

const sectionMetadata : Metadata[] = [{
    icon: 'architecture',
    title: 'Backend',
    section: 'backend',
}, {
    icon: 'draw',
    title: 'Frontend',
    section: 'frontend'
}, {
    icon: 'precision_manufacturing',
    title: 'AI/ML',
    section: 'ai'
}, {
    icon: 'memory_alt',
    title: 'Embedded',
    section: 'embedded'
}, {
    icon: 'connect_without_contact',
    title: 'Connect',
    section: 'connect'
}];

export default () => (
    <div className="home-screen animate__animated animate__fadeInUp col-12">

        <div className='home-screen__hero col-12'>
            <CardFeatured 
                backgroundImageUrl='hero.jpg'
                backgroundShade={false}
                title='Story'
                text={<><p style={ {lineHeight: 'normal'}}>
                    My development journey started during middle school where I was introduced to Java ME at an Evangelion anime fan-site,
                    <button style={ {lineHeight: 'normal'}}
                            onClick={openNewTab('http://gendou.com/forum/search.php?name=yoga')}
                            className='btn border-0 btn-outline-light b-inline my-0 py-0 mx-0 px-1'> Gendou.com
                            <span className='material-symbols-outlined align-middle'>open_in_new</span>
                    </button>
                    made couple of 
                    <button style={ {lineHeight: 'normal'}}
                            onClick={openNewTab('https://github.com/yoga1290/Nokia-3510i#readme')}
                            className='btn border-0 btn-outline-light b-inline my-0 py-0 mx-0 px-1'> MIDlets on my Nokia 3510i
                            <span className='material-symbols-outlined align-middle'>open_in_new</span>
                    </button>
                    which were helpful for school homeworks, IT Teacher invited me for some contests, random tech events in Uni, etc... and that was how CS came into my interest; probably, some mythologies & philosophy too 
                </p>

                <PanelFeatured
                    backgroundShade={false}
                    title='Browse'
                    subtitle=''>
                    {sectionMetadata.map( ( ( { icon, title, section }, i) =>
                        <div className='d-inline-flex'
                            key={i}
                            style={{minWidth: '10rem'}}>
                            <CardWithIcon
                                icon={icon}
                                title={title}
                                click={scrollTo(section)}
                            />
                    </div>))}
                </PanelFeatured>

                </>}
                icon= 'keyboard_arrow_down'
                buttonText='See more'
                click={scrollTo('backend')}
            />
        </div>


        {Sections(sectionMetadata)}

        <Connect />

    </div>
)