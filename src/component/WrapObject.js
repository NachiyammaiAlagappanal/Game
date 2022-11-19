import React from 'react';

const directions = {
	left: { x: 1, y: 0 },
	right: { x: -1, y: 0 },
	top: { x: 0, y: -1 },
	bottom: { x: 0, y: 1 },
};

const WrapObject = (context) => {
	const { data: { x, y, direction },
		config: { boardSize }, shapeStyle: style } = context;

	return (
		<div
			className="center"
			style={ {
				...style,
				left: `${ x + (directions[direction].x * boardSize) }vmin`,
				top: `${ y + (directions[direction].y * boardSize) }vmin`,
			} }
		/>);
};

export default WrapObject;
