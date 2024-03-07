import React from 'react';

import Card from 'yoga1290-ui-pool/react/card'
import CardFeatured from 'yoga1290-ui-pool/react/card-featured'
import jsonData from './data.json'

const data = jsonData.map(({title, subtitle, text, url, backgroudImage}: any) => ({
                title: `🔭 ${title}`,
                text,
                subtitle,
                url,
                backgroudImage
        }));
const openLink = (url:string) => ( ()=>(window.open(url, '_blank')) );

export default () => (
    <div className="experiment animate__animated animate__fadeInUp row">
        {data.map(({title, text, url, subtitle, backgroudImage}: any) => (
            
            !!backgroudImage? 
            (<div className='col-12 col-md-6'>
                <CardFeatured
                    title={title}
                    subtitle={subtitle}
                    text={text}
                    icon='open_in_new'
                    backgroundImageUrl={backgroudImage}
                    click={openLink(url)} />
            </div>): (
            <div className='col-12 col-sm-6 col-md-4'>
                <Card
                    title={title}
                    subtitle={subtitle}
                    text={text}
                    icon='open_in_new'
                    click={openLink(url)} />
            </div>)

        ))}
    </div>
)