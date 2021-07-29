import { React } from 'react';
import context from '../core/context';

const RdmString = () =>
	<div className="rdnStr">{context.state.rndmString}
	</div>;

export default RdmString;
