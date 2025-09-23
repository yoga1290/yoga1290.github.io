import React from 'react';
import Card from 'yoga1290-ui-pool/react/card-with-icon';
import './style.scss';

const emailMe = ()=>(location.href="mailto:yoga1290+ghpage@gmail.com");

export default () => (
    <div className="contact animate__animated animate__fadeInUp col-12 d-flex justify-content-center">
        <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
            <Card
                title="Email me"
                icon='mail'
                click={emailMe} />
        </div>
    </div>
)