import { React } from 'react';
import context from '../core/context';

const Score = () =>
	<div className="score">Score :
		{ context.state.score }
	</div>;

export default Score;
