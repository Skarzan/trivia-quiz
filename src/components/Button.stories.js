import React from 'react';
import Button from "./Button";

export default {
  component: Button,
  title: "Button",
}

const Template = args => <Button {...args} />;

export const Default = Template.bind();
Default.args = {
  label: "Next Question",
  disabled: false,
};

export const Disabled = Template.bind();
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const NewGame = Template.bind();
NewGame.args = {
  ...Default.args,
  label: "New Game",
};