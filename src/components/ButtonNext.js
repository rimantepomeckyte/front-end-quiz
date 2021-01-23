import React from 'react';

const ButtonNext = ({handleAnswerOnClick}) => {
    return (
        <div>
            <button className="btn btn-danger" onClick={handleAnswerOnClick}>Kitas</button>
        </div>
    );
};

export default ButtonNext;