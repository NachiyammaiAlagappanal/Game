/* eslint-disable no-magic-numbers */
/* eslint-disable max-lines-per-function */
import React from 'react';

const Square = ({ data: { size, x, y, direction }}, index) => {
	const square = {
		width: `${ size }vmin`,
		height: `${ size }vmin`,
		backgroundColor: 'black',
	};

	const directions = {
		left: { x: 1, y: 0 },
		right: { x: -1, y: 0 },
		top: { x: 0, y: -1 },
		bottom: { x: 0, y: 1 },
	};

	// eslint-disable-next-line no-console
	console.log(x);

	return <div key={ index }>
		<div
			className="center"
			style={ {
				...square,
				left: `${ x }vmin`,
				top: `${ y }vmin`,
			} }
		/>
		<div
			className="center"
			style={ {
				...square,
				left: `${ x + (directions[direction].x * 100) }vmin`,
				top: `${ y + (directions[direction].y * 100) }vmin`,
			} }
		/></div>;
};

export default Square;
