import React from 'react';

const constantColor = (colors, id) =>
	colors.findLast((color) => color.id === id);

const Square = (context) => {
	const { data: { size, x, y, id },
		state: { colors }} = context;

	return (
		<div
			className="center"
			style={ {
				width: `${ size }vmin`,
				height: `${ size }vmin`,
				backgroundColor: constantColor(colors, id)
					? constantColor(colors, id).color
					: 'black',
				left: `${ x }vmin`,
				top: `${ y }vmin`,
			} }
			onClick={ () => {
				context.actions.changeColor({ ...context, data: id });
			} }
		/>);
};

export default Square;
