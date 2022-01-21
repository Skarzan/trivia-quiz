import React from 'react';
import Question from "./Question";
import { fireEvent, within } from '@storybook/testing-library';

export default {
  component: Question,
  title: "Question",
}

const Template = args => <Question {...args} />;

export const Default = Template.bind();
Default.args = {
  id: 1,
  questionData: {
    "category": "Entertainment: Film",
    "type": "multiple",
    "difficulty": "medium",
    "question": "In which 1973 film does Yul Brynner play a robotic cowboy who malfunctions and goes on a killing\tspree?",
    "correct_answer": "Westworld",
    "incorrect_answers": [
      "Runaway",
      "Android",
      "The Terminators"
    ]
  },
  worth: 100,
  prepareNextQuestion: () => {}
};

export const MoreWorthQuestion = Template.bind();
MoreWorthQuestion.args = {
  ...Default.args,
  id: 2,
  worth: 10000
};

export const UserClickRightAnswer = Template.bind();
UserClickRightAnswer.args = {
  ...Default.args,
};
UserClickRightAnswer.play = async ({canvasElement }) => {
  const canvas = within(canvasElement);
  await  fireEvent.click(canvas.getByText("Westworld"));
};

export const UserClickWrongAnswer = Template.bind();
UserClickWrongAnswer.args = {
  ...Default.args,
};
UserClickWrongAnswer.play = async ({canvasElement }) => {
  const canvas = within(canvasElement);
  await  fireEvent.click(canvas.getByText("Runaway"));
};