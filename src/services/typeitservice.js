
const checkStr = (inpStr, rdmStr) => inpStr === rdmStr ;

const stringServices = ({ rndmString, inputString }) => {
	const stringIndex = rndmString.split('')
		.findIndex((item, index) => item !== inputString[index]);

	return {
		rndString: rndmString.substr(0, stringIndex),
		remainStr: stringIndex < 0
			? rndmString.substr(rndmString.length)
			: rndmString.substr(stringIndex),
	};
};

const typeitservice = {
	checkStr,
	stringServices,
};

export default typeitservice;
