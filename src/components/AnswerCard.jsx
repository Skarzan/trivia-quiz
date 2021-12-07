import React from 'react';

import './AnswerCard.scss';

export default function AnswerCard({id, text, rightAnswer, revealed, clickAnswer}) {

  const answerState = () => {
    if (revealed) {
      if (rightAnswer) {
        return "rightAnswer"
      } else {
        return "wrongAnswer"
      }
    }
    return "";
  }

  return (
      <div onClick={() => clickAnswer()} className={`AnswerCard ${answerState()}`} data-id={id}>
        <div className={"answerText"}>
          {text}
        </div>
      </div>
  )
}