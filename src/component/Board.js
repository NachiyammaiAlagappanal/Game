import React from 'react';
import Shapes from './Shapes';

const Board = (context) => {
	const { config: { boardSize }} = context;

	const style = {
		width: `${ boardSize }vmin`,
		height: `${ boardSize }vmin`,
		background: 'lightPink',
		top: '50%',
		left: '50%',
		overflow: 'hidden',
	};

	return <div className="center" style={ style }>
		<Shapes { ...context }/></div>;
};

export default Board;
