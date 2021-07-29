import { React } from 'react';
import input from './input';
import score from './score';
import rdmString from './randomString';
import result from './result';

const TypeIt = () =>
	<div>
		{ result() }
		{ rdmString() }
		{ input() }
		{ score() }
	</div>;

export default TypeIt;
