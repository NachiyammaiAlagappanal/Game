import React from 'react';

const Triangle = (context) => {
	const { data: { size, x, y, id, color }, config: { half }} = context;

	return (
		<div
			className="center"
			style={ {
				borderLeft: `${ size * half }vmin solid transparent`,
				borderRight: `${ size * half }vmin solid transparent`,
				borderBottom: `${ size }vmin solid ${ color }`,
				left: `${ x }vmin`,
				top: `${ y }vmin`,
			} }
			onClick={ () => {
				context.actions.changeColor({ ...context, data: id });
			} }
		/>);
};

export default Triangle;
