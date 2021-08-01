import { rndString } from '@laufire/utils/random';
import config from './config';
import SampleService from '../services/sample';

const setInputString = ({ data }) => ({
	inputString: data,
});

const setScore = ({ state }) => ({
	score: SampleService.checkStr(state.inputString, state.rndmString) === true
		? state.score + 1
		: state.score,
});

const setRndString = () => ({
	rndmString: rndString(config.rndmStrLength),
	inputString: '',
});

const actions = {
	setInputString,
	setScore,
	setRndString,
};

export default actions;
