import React from 'react';

const ProgressBar = ({bubbles, color}) => {

    return (
        <div className="progress-wrapper py-4 d-flex justify-content-center">
            {bubbles.map(bubble => (<div key={bubble.id} >
                <div className="progress progress-point" id={bubble.id} style={{backgroundColor: "#e6e6e6"}}></div>
                <div className="progress-waypoint"></div>
            </div>
                ))}
        </div>
    );
};

export default ProgressBar;