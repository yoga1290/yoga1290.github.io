import React from 'react';

import CardFeatured from 'yoga1290-ui-pool/react/card-featured-with-buttons'
import CollapsibleList from 'yoga1290-ui-pool/react/collapsible-list'

import jsonData from './data.json'

const data = jsonData.map(({title, text, url}: any) => ({
                title,
                text,
                url
        }));
const openNewTab = (url:string) => ( ()=>(window.open(url, '_blank')) );

export default () => (
    <div className="note">

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
        {/* {data.map(({title, text, url}: any) => (
            <div className='col-12 col-sm-6 col-md-4 col-lg-3 align-self-stretch d-flex'>
            <Card
                title={title}
                text={text}
                icon='text_snippet'
                click={openNewTab(url)} />
        </div>
        ))} */}
    </div>
)