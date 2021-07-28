/* eslint-disable no-console */
import { React } from 'react';
import context from '../core/context';

const actionKeys = {
	Enter: () => context.actions.setRndString(),
};

const typeIt = () => <div>
	<div>{ context.state.inputString === ''
		? null
		: context.state.inputString === context.state.rndmString
			? <div className="img_tick"/>
			: <div className="img_cross"/>}
	</div>
	<div className="rdnStr">
		{context.state.rndmString}
	</div>
	<input
		className="inpStr"
		value={ context.state.inputString }
		onChange={ (evt) =>	context.actions.setInputString(evt.target.value) }
		// eslint-disable-next-line max-len
		onKeyUp={ (evt) => actionKeys[evt.code] && actionKeys[evt.code]() }
	/>
	<div className="score">Score :
		{ context.state.score}
	</div>
</div>;

export default typeIt;
