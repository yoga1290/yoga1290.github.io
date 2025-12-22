import React from 'react';

import Card from 'yoga1290-ui-pool/react/card'
import CardFeatured from 'yoga1290-ui-pool/react/card-featured'
import PanelFeatured from 'yoga1290-ui-pool/react/panel-featured';

import './style.scss';

const openLink = (url:string) => ( ()=>(window.open(url, '_blank')) );

export type SectionProp = {
    title: string;
    icon: string;
    data: any[];
}

export default ( { icon, title, data } : SectionProp) => {


    return (<>
<div className='section row justify-content-center px-0 mx-0'>
    
        <div className='col-12 col-sm-8 col-md-8 col-lg-6 row justify-content-center'>
            <div className='col-12 col-md-4 d-inline-flex justify-content-center'>
                <span className="section__icon col-12 d-inline-flex material-symbols-outlined justify-content-center">
                    {icon}
                </span>
            </div>

            <div className='col-12 col-md-8 d-inline-flex justify-content-center'>
                <h1 className='title'> {title} </h1>
            </div>
        </div>
    

    
    <div
        className="section animate__animated animate__fadeIn row col-12 d-inline-flex ">
        
        <PanelFeatured
            backgroundShade={false}                     
            title={title}
            subtitle='scroll here'>
        
                    
        {data.map(({title, text, url, subtitle, backgroudImage}: any) => (
            
            !!backgroudImage? 
            (<div className='col-12 col-md-6 d-flex'
                    >
                <CardFeatured
                    title={title}
                    subtitle={subtitle}
                    text={text}
                    icon='open_in_new'
                    backgroundImageUrl={backgroudImage}
                    click={openLink(url)} />
            </div>): (
            <div className='col-12 col-sm-6 col-md-4 d-flex'
                    >
                <Card
                    title={title}
                    subtitle={subtitle}
                    text={text}
                    icon='open_in_new'
                    click={openLink(url)} />
            </div>)
        ))}
</PanelFeatured>

    </div>
</div>
    </>);
}