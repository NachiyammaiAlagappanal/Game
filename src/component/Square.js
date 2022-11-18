/* eslint-disable no-magic-numbers */
/* eslint-disable max-lines-per-function */
import React from 'react';

const Square = ({ state: { shapes }}) =>
	shapes.map(({ size, x, y }, index) => {
		const square = {
			width: `${ size }vmin`,
			height: `${ size }vmin`,
			backgroundColor: 'black',
		};

		// eslint-disable-next-line no-console
		console.log(x);
		return <div key={ index }>
			<div
				className="center"
				style={ {
					...square,
					left: `${ x }vmin`,
					top: `${ y }vmin`,
				} }
			/>
			<div
				className="center"
				style={ {
					...square,
					left: `${ x - 100 }vmin`,
					top: `${ y }vmin`,
				} }
			/></div>;
	});

export default Square;
