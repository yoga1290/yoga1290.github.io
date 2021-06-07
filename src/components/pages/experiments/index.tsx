import React from 'react';

import Card from '../../shared/card'
import jsonData from './data.json'

const data = jsonData.map(({title, subtitle, text, url}: any) => ({
                title: `🔭 ${title}`,
                text,
                subtitle,
                url
        }))

export default () => (
    <div className="experiment animate__animated animate__fadeInUp">
        {data.map(({title, text, url, subtitle}: any) => (
            <Card
                title={title}
                subtitle={subtitle}
                text={text}
                url={url} />
        ))}
    </div>
)