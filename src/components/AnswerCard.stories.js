import React from 'react';
import AnswerCard from "./AnswerCard";

export default {
  component: AnswerCard,
  title: "AnswerCard",
  argTypes: {
    clickAnswer: {action:'answer clicked'}
  }

}

const Template = args => <AnswerCard {...args} />;

export const Default = Template.bind();
Default.args = {
  id: 1,
  text: "Mount Everest",
  rightAnswer: false,
  revealed: false
};

export const revealedRightAnswer = Template.bind();
revealedRightAnswer.args = {
  ...Default.args,
  rightAnswer: true,
  revealed: true,
};

export const revealedWrongAnswer = Template.bind();
revealedWrongAnswer.args = {
  ...revealedRightAnswer.args,
  text: "Zugspitze",
  rightAnswer: false,
};