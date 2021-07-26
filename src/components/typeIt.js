import { React } from 'react';
import context from '../core/context';

const typeIt = () => <div>
	<div>
		{context.state.rndmString}
	</div>
	<input
		onChange={ (evt) =>
			context.actions.setInputString(evt.target.value) }
	/>;
	<div>Score :
		{ context.state.score}
	</div>
</div>;

export default typeIt;
