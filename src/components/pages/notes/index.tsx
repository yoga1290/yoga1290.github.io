import React from 'react';

import Card from 'yoga1290-ui-pool/react/card-with-icon'
import jsonData from './data.json'

const data = jsonData.map(({title, text, url}: any) => ({
                title,
                text,
                url
        }));
const openNewTab = (url:string) => ( ()=>(window.open(url, '_blank')) );

export default () => (
    <div className="note row">
        {data.map(({title, text, url}: any) => (
            <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
            <Card
                title={title}
                text={text}
                icon='text_snippet'
                click={openNewTab(url)} />
        </div>
        ))}
    </div>
)