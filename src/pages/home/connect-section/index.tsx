import React from 'react';
import Card from 'yoga1290-ui-pool/react/card-with-icon';
import './style.scss';

const emailMe = ()=>(location.href="mailto:yoga1290+ghpage@gmail.com");

export default () => (

    <div className='connect-section col-12 px-0 justify-content-center row'>
    
                <div className='col-12 col-sm-8 col-md-8 col-lg-6 row justify-content-center'>
                    <div className='col-12 col-md-4 d-inline-flex justify-content-center'>
                        <span className="col-12 d-inline-flex material-symbols-outlined justify-content-center"
                                style={{fontSize: '15rem'}}>
                            connect_without_contact
                        </span>
                    </div>
    
                    <div className='col-12 col-md-8 d-inline-flex justify-content-center'>
                        <h1 className='connect__title'> Connect </h1>
                    </div>
                </div>
    
            
                <div className="contact animate__animated animate__fadeInUp col-12 d-flex justify-content-center">
                    <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                        <Card
                            title="Email me"
                            icon='mail'
                            click={emailMe} />
                    </div>
                </div>
            </div>
)