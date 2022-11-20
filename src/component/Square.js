import React from 'react';

const Square = ({ rest: { size, x, y }}) =>
	<div
		className="center"
		style={ {
			width: `${ size }vmin`,
			height: `${ size }vmin`,
			backgroundColor: 'black',
			left: `${ x }vmin`,
			top: `${ y }vmin`,
		} }
	/>;

export default Square;
