import React from 'react';

const Circle = ({ size, x, y }) =>
	<div
		className="center circle"
		style={ {
			width: `${ size }vmin`,
			height: `${ size }vmin`,
			backgroundColor: 'black',
			borderRadius: '50%',
			left: `${ x }vmin`,
			top: `${ y }vmin`,
		} }
	/>;

export default Circle;
