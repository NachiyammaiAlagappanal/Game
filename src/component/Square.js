import React from 'react';

const Square = (context) => {
	const { data: { size, x, y }} = context;

	return (
		<div
			className="center"
			style={ {
				left: `${ x }vmin`,
				top: `${ y }vmin`,
				width: `${ size }vmin`,
				height: `${ size }vmin`,
				backgroundColor: 'black',
			} }
		/>);
};

export default Square;
