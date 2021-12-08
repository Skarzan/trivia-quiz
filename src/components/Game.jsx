import React, {useState} from 'react';
import example from "./utils/example";

import Question from "./Question";
import Button from "./Button";

import "./Game.scss";

export default function Game() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [waitForAnswer, setWaitForAnswer] = useState(true);

  const nextQuestion = () => {
    setWaitForAnswer(true);
    setQuestionNumber(questionNumber + 1);
  };

  const prepareNextQuestion = () => {
    setWaitForAnswer(false);
  };

  const newGame = () => {
    setQuestionNumber(0);
    setWaitForAnswer(true);
  };

  return (
    <div className="Game">
      <Question  id={questionNumber} questionData={example.results[questionNumber]} worth={(questionNumber + 1) * 100} prepareNextQuestion={prepareNextQuestion} />
      {questionNumber === 9 ?
          <Button label={"New Game"} disabled={waitForAnswer} onClick={() => {newGame()}}/>
          :
          <Button label={"Continue"} disabled={waitForAnswer} onClick={() => {nextQuestion()}}/>
      }
    </div>
  )
}