import React from "react";
import './style.scss'

export default ({ title, text, url }:any) => (
        <div className={`qcard animate__animated animate__fadeInUp col-lg-3 col-md-6 col-sm-5 col-xs-12`}>

            <div className="card bg-dark col-xs-12">
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                <p className="card-text">{text}</p>
                <a href={url} className="card-link" target="_blank">
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-arrow-up-right-square"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        <path fill-rule="evenodd" d="M5.172 10.828a.5.5 0 0 0 .707 0l4.096-4.096V9.5a.5.5 0 1 0 1 0V5.525a.5.5 0 0 0-.5-.5H6.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>
                    </svg>
                </a>
            </div>
            </div>

        </div>
    )