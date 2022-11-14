import React from 'react';

const Triangle = (context) => {
	const { data: { size, x, y }, config: { half }} = context;

	return (
		<div
			className="center"
			style={ {
				width: `${ 0 }vmin`,
				height: `${ 0 }vmin`,
				left: `${ x - (size * half) }vmin`,
				top: `${ y }vmin`,
				borderLeft: `${ size }vmin solid transparent`,
				borderRight: `${ size }vmin solid transparent`,
				borderBottom: `${ size }vmin solid black`,
			} }
		/>);
};

export default Triangle;
