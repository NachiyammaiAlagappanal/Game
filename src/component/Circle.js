import React from 'react';

const Circle = (context) => {
	const { data: { size, x, y, id, color }} = context;

	return (
		<div
			className="center circle"
			style={ {
				width: `${ size }vmin`,
				height: `${ size }vmin`,
				backgroundColor: color,
				borderRadius: '50%',
				left: `${ x }vmin`,
				top: `${ y }vmin`,
			} }
			onClick={ () => {
				context.actions.changeColor({ ...context, data: id });
			} }
		/>);
};

export default Circle;
