import context from '../core/context';

const increaseScore = () => {
	const score = context.state.score + 1;

	return score;
};

const calScore = (str) => {
	const rdmStr = context.state.rndmString;

	const result = str.length !== rdmStr.length
		? null
		: str === rdmStr ? increaseScore()	: null ;

	return result;
};

const SampleService = {
	calScore,
};

export default SampleService;
