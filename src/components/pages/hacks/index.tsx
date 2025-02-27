import React from 'react';

import CardFeatured from 'yoga1290-ui-pool/react/card-featured-with-buttons'
import CollapsibleList from 'yoga1290-ui-pool/react/collapsible-list'
import jsonData from './data.json'

const data = jsonData.map(({title, text, url}) => ({
                title,
                text,
                url
        }))
const openNewTab = (url:string) => ( ()=>(window.open(url, '_blank')) );

export default () => (
    <div className="hacks justify-content-between">

        <div className='col-12'> {/*col-sm-8 col-md-6 */}
            <CollapsibleList 
            children={
                    data.map(({title, text, url}: any) => (
                        <div className='col-12 align-self-stretch d-flex'>
                           
                            <CardFeatured
                                title={title}
                                text={text}
                                buttons={[{
                                    click: openNewTab(url),
                                    icon: 'open_in_new',
                                    text: ''
                                }]}
                                click={openNewTab(url)} />

                        </div>
                    ))
                }
            />
        </div>
    </div>
)