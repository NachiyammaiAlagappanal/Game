import React from 'react';

const constantColor = (colors, id) =>
	colors.findLast((color) => color.id === id);

const Triangle = (context) => {
	const { rest: { size, x, y, id }, config: { half },
		state: { colors }} = context;

	return (
		<div
			className="center"
			style={ {
				borderLeft: `${ size * half }vmin solid transparent`,
				borderRight: `${ size * half }vmin solid transparent`,
				borderBottom: `${ size }vmin solid ${ constantColor(colors, id)
					? constantColor(colors, id).color
					: 'black' }`,
				left: `${ x }vmin`,
				top: `${ y }vmin`,
			} }
			onClick={ () => {
				context.actions.changeColor({ ...context, data: id });
			} }
		/>);
};

export default Triangle;
