import React from 'react';
import {questions1, questions2} from "../data/questions";


const HomePage = () => {

    return (
        <div className="container">
            <div className="home-quiz-box quiz-box bg-white w-75 mx-auto p-4 mt-5 ">
                <h2 className="mb-2"><strong>Front-end klausimynas</strong> 1 dalis</h2>
                <p>Viso klausimų: <strong>{questions1.length}</strong></p>
                <a href="/front-end-quiz1" className="btn btn-info rounded-lg text-center">Pradėti</a>
            </div>
            <div className="home-quiz-box quiz-box bg-white w-75 mx-auto p-4 mt-5 ">
                <h2 className="mb-2"><strong>Front-end klausimynas</strong> 2 dalis</h2>
                <p>Viso klausimų: <strong>{questions2.length}</strong></p>
                <a href="/front-end-quiz2" className="btn btn-info rounded-lg text-center">Pradėti</a>
            </div>

        </div>
    );
};

export default HomePage;