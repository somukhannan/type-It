import { React } from 'react';
import context from '../core/context';

const Input = () =>
	<input
		className="inpStr"
		value={ context.state.inputString }
		onChange={ (evt) =>	{
			context.actions.setInputString(evt.target.value);
			context.actions.setScore();
			context.actions.setRndString();
		} }
	/>;

export default Input;
