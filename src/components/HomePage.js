import React from 'react';
import {questions1} from "../data/questions";


const HomePage = () => {

    return (
        <div className="container">
            <div className="home-quiz-box quiz-box bg-white w-75 mx-auto p-4 mt-5 ">
                <h2 className="mb-2"><strong>Front-end klausimynas</strong></h2>
                <p>Viso klausimų: <strong>{questions1.length}</strong></p>
                <a href="/front-end-quiz" className="btn btn-info rounded-lg text-center">Pradėti</a>
            </div>
        </div>
    );
};

export default HomePage;