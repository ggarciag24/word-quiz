import { render, screen, fireEvent} from '@testing-library/react';
import App from './App';

beforeEach(() => {
  render(<App />)
})

const randomDefBtnClick = () => {
  const randomBtnElement = screen.getByRole('button', { name: /random definition/i });
  fireEvent.click(randomBtnElement);
}

const hintBtnClick = () => {
  const hintBtnElement = screen.getByTestId('hintBtn');
  fireEvent.click(hintBtnElement);
}

describe('App', () => {
test('random definition button appears on page load', () => {
  const randomBtnElement = screen.getByRole('button', { name: /random definition/i })
  expect(randomBtnElement).toBeInTheDocument();
});

test('the first definition appears after the submit button is clicked', () => {
  const firstDefinitionElement = screen.queryByTestId('def-1');
  expect(firstDefinitionElement).toBeNull();  
  randomDefBtnClick();
  const firstDefinitionElementAgain = screen.getByTestId('def-1');
  expect(firstDefinitionElementAgain).toBeInTheDocument();
});

test('the hint button appears after the random definition button is clicked', () => {
  const hintBtnElement = screen.queryByTestId('hintBtn');
  expect(hintBtnElement).toBeNull();
  randomDefBtnClick();
  const hintBtnElementAgain = screen.getByTestId('hintBtn');
  expect(hintBtnElementAgain).toBeInTheDocument();
})

test('the guess input appears after the random definition button is clicked', () => {
  const guessInputElement = screen.queryByTestId('guessInput');
  expect(guessInputElement).toBeNull();
  randomDefBtnClick();
  const guessInputElementAgain = screen.getByTestId('guessInput');
  expect(guessInputElementAgain).toBeInTheDocument();
})

test('the guess button appears after the random definition button is clicked', () => {
  const guessBtnElement = screen.queryByTestId('guessBtn');
  expect(guessBtnElement).toBeNull();
  randomDefBtnClick();
  const guessBtnElementAgain = screen.getByTestId('guessBtn');
  expect(guessBtnElementAgain).toBeInTheDocument();
})

test('can type into the guess input', () => {
  randomDefBtnClick();
  const guessInputElement = screen.getByTestId('guessInput');
  fireEvent.change(guessInputElement,{target: {value: "castle"}});
  expect(guessInputElement.value).toBe("castle");
})

test('when the hint button is clicked the part of speech hint appears', () => {
  const partOfSpeechElement = screen.queryByTestId('partOfSpeech');
  expect(partOfSpeechElement).toBeNull();
  randomDefBtnClick();
  hintBtnClick();
  const partOfSpeechElementAgain = screen.getByTestId('partOfSpeech');
  expect(partOfSpeechElementAgain).toBeInTheDocument();
})

test('when the hint button is clicked twice the second definition appears', () => {
  const secondDefinitionElement = screen.queryByTestId('def-2');
  expect(secondDefinitionElement).toBeNull();
  randomDefBtnClick();
  const secondDefinitionElementAgain = screen.queryByTestId('def-2');
  expect(secondDefinitionElementAgain).toBeNull();
  hintBtnClick();
  const secondDefinitionElementAgain2 = screen.queryByTestId('def-2');
  expect(secondDefinitionElementAgain2).toBeNull();
  hintBtnClick();
  const secondDefinitionElementAgain3 = screen.getByTestId('def-2');
  expect(secondDefinitionElementAgain3).toBeInTheDocument();
})
})