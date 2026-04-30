import React from 'react';
import './style.scss';

const renderGitHubButton = () => (
    <div className='gh-follow-bottn d-inline-flex justify-content-center'>
        <a className="github-button connect-link"
            href="https://github.com/yoga1290"
            data-color-scheme="no-preference: light; light: light_high_contrast; dark: dark;"
            data-size="large"
            data-show-count="true"
            aria-label="Follow @yoga1290 on GitHub">Follow on Github</a> 
    </div>);

export default () => (

    <section className="connect-section" id="connect">
        <div className="connect-text">
            <h2 className="connect-headline font-headline text-6xl md:text-8xl font-light mb-12 tracking-tighter">
                    Let's build <br/>
                    the
                    <span className="connect-headline__next">Next</span>.
            </h2>
            <div className="connect-links-group">
                <a className="connect-link" href="mailto:yoga1290+ghpage@gmail.com" target='_blank'>Email</a>
                {renderGitHubButton()}
            </div>
        </div>
</section>
)