import { React } from 'react';
import './App.scss';
import typeIt from './components/typeIt';

const App = () =>
	<div className="App">
		{ typeIt() }
	</div>
	;

export default App;
