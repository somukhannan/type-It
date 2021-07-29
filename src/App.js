import { React } from 'react';
import './App.scss';
import TypeIt from './components/typeIt';

const App = () =>
	<div className="App">
		{ TypeIt() }
	</div>;

export default App;
