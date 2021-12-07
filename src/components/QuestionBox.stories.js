import React from 'react';

import QuestionBox from "./QuestionBox";

export default {
  component: QuestionBox,
  title: "QuestionBox"
}

const Template = args => <QuestionBox {...args} />;

export const Default = Template.bind();
Default.args = {
  id: 1,
  question: "What is the highest mountain on earth?",
  worth: 100
};

export const BigWorth = Template.bind();
BigWorth.args = {
  ...Default.args,
  worth: 10000
};