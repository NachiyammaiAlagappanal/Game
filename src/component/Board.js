import React from 'react';
import Circle from './Circle';
import Square from './Square';
import Triangle from './Triangle';

const component = {
	Circle,
	Square,
	Triangle,
};

const Board = (context) => {
	const { config: { boardSize }, state: { shapes }} = context;

	const style = {
		width: `${ boardSize }vmin`,
		height: `${ boardSize }vmin`,
		background: 'lightPink',
		top: '50%',
		left: '50%',
	};

	return <div className="center" style={ style }>
		{shapes.map(({ type, ...data }, index) => {
			const Shape =	component[type];

			return <Shape key={ index }{ ...{ ...context, data } }/>;
		})}</div>;
};

export default Board;
