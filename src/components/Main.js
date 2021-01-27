import React, {useState} from 'react'
import HomePage from "./HomePage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Quiz1 from "./Quiz1";
import {questions1} from "../data/questions";
import ProgressBar from "./ProgressBar";


const Main = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState(0);

    const bubbles = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}, {id: 11},
        {id: 12}, {id: 13}, {id: 14}, {id: 15}, {id: 16}, {id: 17}, {id: 18}, {id: 19}, {id: 20},{id:21},{id:22},{id:23},
        {id:24},{id:25},{id:26},{id:27},{id:28},{id:29},{id:30},{id:31},{id:32},{id:33}]

    const handleAnswerOnClick = (isCorrect, id) => {
        console.log(bubbles);
        if (isCorrect === true) {
            setResult(result + 1);
           //Vietoj SetColor pakeiciame individualaus burbulo spalva, kadangi su SetColor pasikeicia visas burbulu "Mapas"
           let bubble = document.getElementById(id);
           bubble.style.backgroundColor="#2cab4e";
        } else {
            let bubble = document.getElementById(id);
                bubble.style.backgroundColor="#d95a4c";
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions1.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResult(true);
        }
    }
   /* const [currentQuestion2, setCurrentQuestion2] = useState(0);
    const [showResult2, setShowResult2] = useState(false);
    const [result2, setResult2] = useState(0);

    const handleAnswerOnClick2 = (isCorrect) => {
        if (isCorrect === true) {
            setResult2(result2 + 1);
            let bubble = document.getElementById(id);
            bubble.style.backgroundColor="#2cab4e";
        } else {
            let bubble = document.getElementById(id);
            bubble.style.backgroundColor="#d95a4c";
        }
        const nextQuestion2 = currentQuestion2 + 1;
        if (nextQuestion2 < questions2.length) {
            setCurrentQuestion2(nextQuestion2);
        } else {
            setShowResult2(true);
        }
    }*/
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact>
                        <HomePage/>
                    </Route>
                    <Route path="/front-end-quiz">
                        <Quiz1 result={result} showResult={showResult} currentQuestion={currentQuestion}
                               handleAnswerOnClick={handleAnswerOnClick}/>
                        <ProgressBar bubbles={bubbles} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default Main;