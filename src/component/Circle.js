import React from 'react';

const Circle = (context) => {
	const { rest: { size, x, y, id }} = context;

	return (
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
			onClick={ () => {
				context.actions.changeColor({ ...context, data: id });
			} }
		/>);
};

export default Circle;
