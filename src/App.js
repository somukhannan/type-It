/* eslint-disable no-console */
import { React } from 'react';
import './App.scss';
import typeIt from './components/typeIt';
import context from './core/context';

const App = () =>
	<div className="App">
		{ typeIt() }
		{ console.log(context.state) }
	</div>
	;

export default App;
