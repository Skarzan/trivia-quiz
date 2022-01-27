import React from 'react';
import Game from "./Game";
import AnswerCard from "./AnswerCard";

export default {
  component: Game,
  title: "Game"
}

const Template = args => <Game {...args} />;

export const Default = Template.bind();