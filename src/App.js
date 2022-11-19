/* eslint-disable no-console */
import { React, useEffect } from 'react';
import './App.scss';
import Board from './component/Board';
import Ticker from './service/Ticker';

const App = (context) => {
	useEffect(() => Ticker.start(context), []);
	console.log(context);
	return <div className="App" role="App">
		<Board { ...context }/>
	</div>;
};

export default App;
