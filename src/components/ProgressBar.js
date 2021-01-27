import React from 'react';

const ProgressBar = ({bubbles}) => {

    return (
        <div className="progress-wrapper py-4 d-flex justify-content-center">
            {bubbles.map(bubble => (<div key={bubble.id} >
                <div className="progress progress-point mx-1" id={bubble.id} style={{backgroundColor: "#e6e6e6"}}></div>
            </div>
                ))}
        </div>
    );
};

export default ProgressBar;