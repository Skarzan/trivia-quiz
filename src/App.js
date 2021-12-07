import './App.css';
import React from 'react';
import AnswerCard from "./components/AnswerCard";

function App() {
  return (
    <AnswerCard id={"1"} text={"This is my little text"} rightAnswer={false} revealed={false} />
  );
}

export default App;
