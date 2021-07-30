import { rndString } from '@laufire/utils/random';
import config from './config';

const setInputString = ({ data }) => ({
	inputString: data,
});

const updateScore = ({ score }) => ({
	score,
});

const setRndString = () => ({
	rndmString: rndString(config.rndmStrLength),
	inputString: '',
});

const actions = {
	setInputString,
	setRndString,
	updateScore,
};

export default actions;