/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import React from 'react';

const Circle = ({ data: { size, x, y, direction }}) => {
	const directions = {
		left: { x: 1, y: 0 },
		right: { x: -1, y: 0 },
		top: { x: 0, y: -1 },
		bottom: { x: 0, y: 1 },
	};

	return <div>
		<div
			className="center circle"
			style={ {
				left: `${ x }vmin`,
				top: `${ y }vmin`,
				width: `${ size }vmin`,
				height: `${ size }vmin`,
			} }
		/>
		<div
			className="center circle"
			style={ {
				left: `${ x + (directions[direction].x * 100) }vmin`,
				top: `${ y + (directions[direction].y * 100) }vmin`,
				width: `${ size }vmin`,
				height: `${ size }vmin`,
			} }
		/></div>;
};

export default Circle;
