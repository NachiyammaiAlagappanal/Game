import React from 'react';
import Square from './Square';

const Board = (context) => {
	const { config: { boardSize }} = context;

	const style = {
		width: `${ boardSize }vmin`,
		height: `${ boardSize }vmin`,
		background: 'lightPink',
		top: '50%',
		left: '50%',
	};

	return <div 	className="center" style={ style }>
		<Square { ...context }/></div>;
};

export default Board;