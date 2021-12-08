import React, {useState, useEffect} from 'react';
import QuestionBox from "./QuestionBox";
import AnswerCard from "./AnswerCard";
import "./Question.scss";

export default function Question({id, questionData, worth, prepareNextQuestion}) {

  const [userAnsweredQuestion, setUserAnsweredQuestion] = useState(false);
  const [guessedRight, setGuessedRight] = useState(false);

  useEffect(() => {
    setUserAnsweredQuestion(false);
    setGuessedRight(false);
  },[id]);

  const shuffleAndReturnAnswers = () => {
    let answerArray = [
      { text: questionData.incorrect_answers[0], correct: false},
      { text: questionData.incorrect_answers[1], correct: false},
      { text: questionData.incorrect_answers[2], correct: false},
      { text: questionData.correct_answer, correct: true}
    ];

    function compare( a, b ) {
      if ( a.text < b.text ){
        return -1;
      }
      if ( a.text > b.text ){
        return 1;
      }
      return 0;
    }

    answerArray.sort( compare );

    return answerArray.map((answer, i) => {
      return (
          <AnswerCard
              id={i}
              revealed={userAnsweredQuestion}
              text={answer.text}
              rightAnswer={answer.correct}
              clickAnswer={() =>  {
                clickAnswer(answer.correct);
                prepareNextQuestion();
              }}
          />
      );
    });
  };

  const clickAnswer = (correctAnswer) => {
    setUserAnsweredQuestion(true);
    if (correctAnswer) {
      setGuessedRight(true);
    }
  };

  const setWorth = () => {
    if (userAnsweredQuestion && guessedRight) {
      return "✔";
    } else if (userAnsweredQuestion && !guessedRight) {
      return "ⓧ"
    } else return `${worth} $`;
  }

  return (
    <div className={"Question"}>
      <QuestionBox id={id} question={questionData.question} worth={setWorth()}/>
      <div className={"answersSection"}>
        {shuffleAndReturnAnswers()}
      </div>
    </div>
  )
};