/* eslint-disable no-console */
import { React, useEffect } from 'react';
import './App.scss';
import BackGround from './component/Background';
import Ticker from './service/Ticker';

const App = (context) => {
	useEffect(() => Ticker.start(context), []);
	console.log(context);

	return <div className="set-background" role="App">
		<BackGround { ...context }/>
	</div>;
};

export default App;
