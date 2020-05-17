import React from 'react';

const Dev = ( {dev} ) => {
    return (
        <div className="dev">
            <img src="{dev.image}" alt="{dev.name} Picture"/>
            <h2 className="dev-name">{dev.name}</h2>
            <h5 className="dev-job">{dev.position} at {dev.company}</h5>
            { (dev.project) ? <h5 className="dev-job">{dev.project}</h5> : '' }
            <p className="dev-text"></p>
            <div className="social-links">
                <a href={dev.portfolio}><i data-feather="link"></i></a>
                <a href={dev.linkedin}><i data-feather="linkedin"></i></a>
                <a href={dev.github}><i data-feather="github"></i></a>
                <a href={dev.twitter}><i data-feather="twitter"></i></a>
            </div>
        </div>
    );
};

export default Dev;