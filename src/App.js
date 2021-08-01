/* eslint-disable no-console */
import { React } from 'react';
import './App.scss';
import TypeIt from './components/typeIt';
import context from './core/context';

const App = () =>
	<div className="App">
		{ TypeIt() }
		{ console.log(context.state)}
	</div>;

export default App;
