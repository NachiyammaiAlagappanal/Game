import React from 'react';

const half = 0.5;

const Triangle = (context) => {
	const { rest: { size, x, y, id }} = context;

	return (
		<div
			className="center"
			style={ {
				borderLeft: `${ size * half }vmin solid transparent`,
				borderRight: `${ size * half }vmin solid transparent`,
				borderBottom: `${ size }vmin solid black`,
				left: `${ x }vmin`,
				top: `${ y }vmin`,
			} }
			onClick={ () => {
				context.actions.changeColor({ ...context, data: id });
			} }
		/>);
};

export default Triangle;
