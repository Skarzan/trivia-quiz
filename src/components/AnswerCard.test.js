import { render, screen } from '@testing-library/react';
import AnswerCard from './AnswerCard';

import  {Default} from "./AnswerCard.stories";

test("it renders Answer",() => {
  render(<AnswerCard id={1} text={"Dr. Who"} rightAnswer={false} revealed={false} clickAnswer={jest.fn()}/>);
  const answer = screen.getByText("Dr. Who");
  expect(answer).toBeInTheDocument();
});

test("it renders Answer with story used",() => {
  render(<Default {...Default.args}/>);
  const answer = screen.getByText("Mount Everest");
  expect(answer).toBeInTheDocument();
});