import { React } from 'react';
import './App.scss';
import BackGround from './component/Background';

const App = (context) =>
	<div className="set-background" role="App">
		<BackGround { ...context }/>
	</div>;

export default App;
