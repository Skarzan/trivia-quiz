import React from 'react';

import './QuestionBox.scss';

export default function QuestionBox({id, question, worth}) {
  return (
    <div className={"QuestionBox"}>
      <div className={"questionBoxText"}>{decodeURI(question)}</div>
      <div className={"cashWorth"}>{worth}</div>
    </div>
  )
}