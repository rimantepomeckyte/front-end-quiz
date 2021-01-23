import React from 'react';

const ProgressBar = ({color}) => {

    const createDiv = () => {
        let div = [];
        for (let i = 0; i < 19; i++) {
            div.push(<div>
                <div className="progress progress-point" style={{backgroundColor: color}}></div>
                <div className="progress-waypoint"></div>
            </div>)
        }
        return div;
    }

    return (
        <div className="progress-wrapper py-4 d-flex justify-content-center">
            {createDiv()}
            <div className="progress progress-point" style={{backgroundColor: color}}></div>
        </div>
    );
};

export default ProgressBar;