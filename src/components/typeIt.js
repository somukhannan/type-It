import { React } from 'react';
import context from '../core/context';

const actionKeys = {
	Enter: () => context.actions.setRndString(),
};

const typeIt = () => <div>
	<div>
		{context.state.rndmString}
	</div>
	<input
		onChange={ (evt) =>
			context.actions.setInputString(evt.target.value) }
		onKeyUp={ (evt) => actionKeys[evt.code] && actionKeys[evt.code]() }
	/>;
	<div>Score :
		{ context.state.score}
	</div>
</div>;

export default typeIt;
