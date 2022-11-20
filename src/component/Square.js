import React from 'react';

const Square = (context) => {
	const { rest: { size, x, y, colorValue }, state: { color }} = context;

	return (
		<div
			className="center"
			style={ {
				width: `${ size }vmin`,
				height: `${ size }vmin`,
				backgroundColor: color ? colorValue : 'black',
				left: `${ x }vmin`,
				top: `${ y }vmin`,
			} }
			onClick={ () => context.actions.changeColor(true) }
		/>);
};

export default Square;
