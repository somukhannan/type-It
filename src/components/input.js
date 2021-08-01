/* eslint-disable max-len */
import { React } from 'react';
import context from '../core/context';

const actionKeys = {
	Enter: () => context.actions.setRndString(),
};

const Input = () =>
	<input
		className="inpStr"
		value={ context.state.inputString }
		onChange={ (evt) =>	context.actions.setInputStringAndScore(evt.target.value) }
		// eslint-disable-next-line max-len
		onKeyUp={ (evt) => actionKeys[evt.code] && actionKeys[evt.code]() }
	/>;

export default Input;
