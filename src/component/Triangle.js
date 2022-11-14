import React from 'react';

const Triangle = (context) => {
	const { data: { size, x, y }, config: { half }} = context;

	return (
		<div
			className="center"
			style={ {
				left: `${ x }vmin`,
				top: `${ y }vmin`,
				borderLeft: `${ size * half }vmin solid transparent`,
				borderRight: `${ size * half }vmin solid transparent`,
				borderBottom: `${ size }vmin solid black`,
			} }
		/>);
};

export default Triangle;
