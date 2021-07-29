import { React } from 'react';
import context from '../core/context';
import tick from './tick';
import cross from './cross';

const Result = () =>
	<div>{ context.state.inputString === ''
		? <div className="note">Start Typing...</div>
		: context.state.inputString === context.state.rndmString
			? cross()
			: tick()}
	</div>;

export default Result;
