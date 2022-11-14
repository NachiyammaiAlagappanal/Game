import React from 'react';

const Circle = (context) => {
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
				borderRadius: '50%',
			} }
		/>);
};

export default Circle;
