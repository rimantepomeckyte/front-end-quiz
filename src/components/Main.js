import React, {useState} from 'react'
import HomePage from "./HomePage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Quiz1 from "./Quiz1";
import {questions1} from "../data/questions";
import Quiz2 from "./Quiz2";
import {questions2} from "../data/questions";
import ProgressBar from "./ProgressBar";


const Main = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState(0);
    const [color, setColor] = useState("#e6e6e6");

    const bubbles = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}]
    /* const createDiv = () => {
         let div = [];
         for (let i = 1; i < 21; i++) {
             div.push(<div key={i}>
                 <div  className="progress progress-point" style={{backgroundColor: color}}></div>
                 <div className="progress-waypoint"></div>
             </div>)
         }
         return div;
         //console.log(div);
     }*/

    const handleAnswerOnClick = (isCorrect) => {
        console.log(bubbles);
        if (isCorrect === true) {
            setResult(result + 1);
           // if (questions1[currentQuestion].id ===)
                setColor("#a4c88d");
        } else {
            setColor("#f06755");
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions1.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResult(true);
        }
    }
    const [currentQuestion2, setCurrentQuestion2] = useState(0);
    const [showResult2, setShowResult2] = useState(false);
    const [result2, setResult2] = useState(0);

    const handleAnswerOnClick2 = (isCorrect) => {
        if (isCorrect === true) {
            setResult2(result2 + 1)
        }
        const nextQuestion2 = currentQuestion2 + 1;
        if (nextQuestion2 < questions2.length) {
            setCurrentQuestion2(nextQuestion2);
        } else {
            setShowResult2(true);
        }
    }
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact>
                        <HomePage/>
                    </Route>
                    <Route path="/front-end-quiz1">
                        <Quiz1 result={result} showResult={showResult} currentQuestion={currentQuestion}
                               handleAnswerOnClick={handleAnswerOnClick}/>
                        <ProgressBar bubbles={bubbles} color={color}/>
                    </Route>
                    <Route path="/front-end-quiz2">
                        <Quiz2 result2={result2} showResult2={showResult2} currentQuestion2={currentQuestion2}
                               handleAnswerOnClick2={handleAnswerOnClick2}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default Main;