/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import React from 'react';

const Triangle = ({ data: { size, x, y, direction }, config: { half }}) => {
	const directions = {
		left: { x: 1, y: 0 },
		right: { x: -1, y: 0 },
		top: { x: 0, y: -1 },
		bottom: { x: 0, y: 1 },
	};
	const border = {
		borderLeft: `${ size * half }vmin solid transparent`,
		borderRight: `${ size * half }vmin solid transparent`,
		borderBottom: `${ size }vmin solid black`,
	};

	return <div>
		<div
			className="center"
			style={ { ... border,
				left: `${ x }vmin`,
				top: `${ y }vmin` } }
		/>
		<div
			className="center"
			style={ { ...border,
				left: `${ x + (directions[direction].x * 100) }vmin`,
				top: `${ y + (directions[direction].y * 100) }vmin` } }
		/></div>;
};

export default Triangle;
