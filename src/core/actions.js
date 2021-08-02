/* eslint-disable no-console */
import { rndString } from '@laufire/utils/random';
import config from './config';
import typeitservice from '../services/typeitservice';

const setInputString = ({ data }) => ({
	inputString: data,
});

const setScore = ({ state }) => ({
	score: typeitservice.checkStr(state.inputString, state.rndmString) === true
		? state.score + 1
		: state.score,
});

const setRndString = ({ state }) => (
	state.inputString.length === state.rndmString.length
		? {
			rndmString: rndString(config.rndmStrLength),
			inputString: '',
		}
		: ''
);

const actions = {
	setInputString,
	setScore,
	setRndString,
};

export default actions;
