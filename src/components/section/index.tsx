import React from 'react';

import Card from 'yoga1290-ui-pool/react/card-with-buttons'
import CardFeatured from 'yoga1290-ui-pool/react/card-featured'
import SearchAndSelectAndSortPanel from 'yoga1290-ui-pool/react/search-and-select-and-sort-panel';
import { similaritySearch } from './similaritySearch';

import './style.scss';
import { PagingAndSortingResult } from 'yoga1290-ui-pool/react/search-and-select-and-sort-panel/usePagingAndSorting';

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

        <SearchAndSelectAndSortPanel
            onItemsQuery={(query) => (new Promise<PagingAndSortingResult<any>>((res)=> {
                
                const hasValidQuery = !!query && query.length > 0;
                let content = data;
                if (hasValidQuery) {
                    const itKeys = ['title', 'subtitle', 'text'];
                    content =  similaritySearch(data, query, itKeys).map(it => it.value);
                }
                setTimeout(()=> (
                    res({
                        content,
                        size: content.length,
                        first: true,
                        last: true,
                    })
                ), 500);
                
            }))}
            allowHorizontalView={true}
            allowVerticalInlineDisplay={true}
            title='Quick search'
            materialIcon='book'
            maxSelection={0}
            renderItem={({title, text, url, subtitle, backgroudImage}: any, _selection) => (
            
            !!backgroudImage? 
            (
            <div className='col-12' style={{width: '20rem'}}>
                <CardFeatured
                    title={title}
                    subtitle={subtitle}
                    text={text}
                    icon='open_in_new'
                    backgroundImageUrl={backgroudImage}
                    click={openLink(url)} />

                
                    {/* <CardFeaturedWithButtons 
                        title={title}
                        subtitle={subtitle}
                        text={text}
                        icon='open_in_new'
                        backgroundImageUrl={backgroudImage}
                        buttons={[{
                            text:'github',
                            icon:'open_in_new',
                            click:() => (
                                new Promise((res, _rej)=>{
                                    openLink(url);
                                    res({});
                                })
                            )
                        }]} /> */}
            </div>): (
            <div className='col-12 d-inline-flex'
                    >
                <Card
                    title={title}
                    subtitle={subtitle}
                    text={text}
                    buttons={[{
                        text:'github',
                        icon:'open_in_new',
                        click: openLink(url)
                    }]} />
                {/* <Card
                    title={title}
                    subtitle={subtitle}
                    text={text}
                    icon='open_in_new'
                    click={openLink(url)} /> */}
            </div>)
        )}>
            
        </SearchAndSelectAndSortPanel>

    </div>
</div>
    </>);
}