import React from "react";
import './style.scss';

export type CardProps = {
    title: string;
    subtitle?: string;
    text?: string;
    url: string;
};

export default ({ title, text, url, subtitle }: CardProps) => (
        <div className={`animate__animated animate__fadeInUp col-lg-4 col-sm-6 col-xs-12 d-inline-block`}>

            <div className="card bg-dark col-12 border-light pointer-cursor d-inline-block py-2 my-4">
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <p className={`card-subtitle mb-2 text-muted ${subtitle ? '':'invisible'}`}>
                    { subtitle }
                </p>
                <p className="card-text">{text}</p>

                <div className="row float-right">
                        <button type="button" className="btn border-0 btn-outline-light btn-sm"
                            onClick={() => (window.open(url, '_blank'))}>
                            <span className="material-icons">open_in_new</span>
                        </button>
                </div>

            </div>
            </div>

        </div>
    )