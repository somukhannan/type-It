import { rndString } from '@laufire/utils/random';
import config from './config';
import SampleService from '../services/sample';

const setInputStringAndScore = ({ data }) => ({
	inputString: data,
	score: SampleService.calScore(data),
});

const setRndString = () => ({
	rndmString: rndString(config.rndmStrLength),
	inputString: '',
});

const actions = {
	setInputStringAndScore,
	setRndString,
};

export default actions;