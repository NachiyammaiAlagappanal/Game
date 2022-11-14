import React from 'react';

const Square = (context) => {
	const { state: { squares }} = context;

	return (
		squares.map(({ size, x, y }, index) =>
			<div
				key={ index }
				className="center"
				style={ {
					left: `${ x }vmin`,
					top: `${ y }vmin`,
					width: `${ size }vmin`,
					height: `${ size }vmin`,
					backgroundColor: 'black',
				} }
			/>));
};

export default Square;
