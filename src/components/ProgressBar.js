import React from 'react';
import {questions1} from "../data/questions";

const ProgressBar = ({bubbles, color}) => {

    return (
        <div className="progress-wrapper py-4 d-flex justify-content-center">
            {bubbles.map(bubble => (<div key={bubble.id} >
                <div className="progress progress-point" style={{backgroundColor: color}}></div>
                <div className="progress-waypoint"></div>
            </div>
                ))}
        </div>
    );
};

export default ProgressBar;