import React from 'react';
import {questions2} from "../data/questions";

const Quiz2 = ({result2, currentQuestion2, handleAnswerOnClick2, showResult2}) => {
    return (
        <>
            {showResult2 ? (
                    <div className="bg-white quiz-box w-75 mx-auto p-4 mt-5">
                        <h2 className="font-weight-bolder results-box text-center mb-5 p-2">Bendras
                            rezultatas {result2}/{questions2.length}</h2>
                        <div className="d-flex justify-content-center row">
                            <a href="/front-end-quiz2" className="btn btn-info rounded-lg text-center mr-md-3 col-lg-2 col-md-4 col-12 mb-3 mb-md-0">Bandyti dar kartą</a>
                            <a href="/" className="btn btn-info rounded-lg text-center col-lg-2 col-md-4 ml-md-3 col-12">Grįžti į pradžią</a>
                        </div>
                    </div>
                )
                : (<div className="bg-white quiz-box w-75 mx-auto p-4 mt-5">
                    <div
                        className="question-card-top">Klausimas {questions2[currentQuestion2].id} iš {questions2.length}</div>
                    <hr className="mt-0"/>
                    <div
                        className="mb-2 row mx-2 mb-4 font-weight-bolder question-box">{questions2[currentQuestion2].question}</div>
                    {questions2[currentQuestion2].answers.map((answer,index) => (
                        <button key={index} className="row mx-2 p-2 mb-3 answer-box w-100 border-0"
                                onClick={() => handleAnswerOnClick2(answer.isCorrect)}>{answer.text}</button>
                    ))}
                </div>)}
        </>
    );
};

export default Quiz2;