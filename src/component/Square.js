/* eslint-disable no-magic-numbers */
import React from 'react';

// const limit = 100;

const Square = ({ data: { size, x, y }}) => {
	const square = {
		width: `${ size }vmin`,
		height: `${ size }vmin`,
		backgroundColor: 'black',
	};

	return <div>
		<div
			className="center"
			style={ { ...square,
				left: `${ x }vmin`,
				top: `${ y }vmin` } }
		/>
		<div
			className="center"
			style={ { ...square,
				left: `${ (x - 100) % (100 - (size * 0.5)) }vmin`,
				top: `${ y % (100 - (size * 0.5)) }vmin` } }
		/></div>;
};

export default Square;
