/* eslint-disable no-console */
import React from 'react';

const Square = (context) => {
	const { data: { size, x, y, id, color }} = context;

	console.log(context);

	return (
		<div
			className="center"
			style={ {
				width: `${ size }vmin`,
				height: `${ size }vmin`,
				backgroundColor: color,
				left: `${ x }vmin`,
				top: `${ y }vmin`,
			} }
			onClick={ () => {
				context.actions.changeColor({ ...context, data: id });
			} }
		/>);
};

export default Square;
