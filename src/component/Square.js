import React from 'react';
import WrapObject from './WrapObject';

const Square = (context) => {
	const { data: { size, x, y }} = context;
	const style = {
		width: `${ size }vmin`,
		height: `${ size }vmin`,
		backgroundColor: 'black',
	};

	return <div>
		<div
			className="center"
			style={ {
				...style,
				left: `${ x }vmin`,
				top: `${ y }vmin`,
			} }
		/>
		<WrapObject { ...{ ...context, shapeStyle: style } }/></div>;
};

export default Square;
