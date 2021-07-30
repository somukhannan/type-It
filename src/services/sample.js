/* eslint-disable no-console */
import context from '../core/context';

const setInputString = (string) => {
	context.actions.setInputString(string);
};

const calScore = (string) => {
	const score = context.state.score + 1;

	context.actions.updateScore(score);
	setInputString(string);
};

const setInputStringAndScore = (string) =>
	(string.length === context.state.rndmString.length
		? calScore(string)
		: setInputString(string));

const SampleService = {
	setInputStringAndScore,
};

export default SampleService;
