import { React } from 'react';
import context from '../core/context';
import TypeIt from '../services/typeitservice';

const RdmString = () => {
	const data = TypeIt.stringServices(context.state);

	return <div className="rdnStr">
		<span style={ { color: 'black' } }>
			{data.rndString}
		</span>
		<span>
			{ data.remainStr }
		</span>
	</div> ;
};

export default RdmString;
