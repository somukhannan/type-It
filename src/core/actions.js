import { rndString } from '@laufire/utils/random';
import config from './config';

const setInputString = ({ state, data }) => ({
	score: state.rndmString === data
		? state.score + 1
		: state.score,
});

const setRndString = () => ({
	rndmString: rndString(config.rndmStrLength),
});

const actions = {
	setInputString,
	setRndString,
};

export default actions;
