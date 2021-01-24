import React from 'react';
import {questions1} from "../data/questions";


const Quiz1 = ({showResult, currentQuestion, result, handleAnswerOnClick}) => {

    return (
        <>
            {showResult ? (
                    <div className="bg-white quiz-box w-75 mx-auto p-4 mt-5">
                        <h2 className="font-weight-bolder results-box text-center mb-5 p-2">Bendras
                        rezultatas {result}/{questions1.length}</h2>
                        <div className="d-flex justify-content-center row">
                        <a href="/front-end-quiz1" className="btn btn-info rounded-lg text-center mr-md-3 col-lg-2 col-md-4 col-12 mb-3 mb-md-0">Bandyti dar kartą</a>
                        <a href="/" className="btn btn-info rounded-lg text-center col-lg-2 col-md-4 ml-md-3 col-12">Grįžti į pradžią</a>
                    </div>
                    </div>
                )
                : (<div className="bg-white quiz-box w-75 mx-auto p-4 mt-5">
                    <div
                        className="question-card-top">Klausimas {questions1[currentQuestion].id} iš {questions1.length}</div>
                    <hr className="mt-0"/>
                    <div
                        className="mb-2 row mx-2 mb-4 font-weight-bolder question-box">{questions1[currentQuestion].question}</div>
                    {questions1[currentQuestion].answers.map((answer, index) => (
                        <button className="row mx-2 p-2 mb-3 answer-box w-100 border-0" key={index}
                                onClick={() => handleAnswerOnClick(answer.isCorrect, questions1[currentQuestion].id)}>{answer.text}</button>
                    ))}

                </div>)}

        </>
    );
};

export default Quiz1;