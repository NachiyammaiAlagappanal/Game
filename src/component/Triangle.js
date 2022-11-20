import React from 'react';

const half = 0.5;

const Triangle = ({ size, x, y }) =>
	<div
		className="center"
		style={ { borderLeft: `${ size * half }vmin solid transparent`,
			borderRight: `${ size * half }vmin solid transparent`,
			borderBottom: `${ size }vmin solid black`,
			left: `${ x }vmin`,
			top: `${ y }vmin` } }
	/>;

export default Triangle;
