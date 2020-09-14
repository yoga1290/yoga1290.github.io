import React from 'react';

import Card from '../../card'
import jsonData from './data.json'

const data = jsonData.map(({title, text, url}) => ({
                title: `⚙️ ${title}`,
                text,
                url
        }))

export default () => (
    <div className="hacks animate__animated animate__fadeInUp">
        {data.map(({title, text, url}: any) => (
            <Card
                title={title}
                text={text}
                url={url} />
        ))}
    </div>
)