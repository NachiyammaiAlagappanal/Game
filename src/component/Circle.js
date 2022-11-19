import React from 'react';
import WrapObject from './WrapObject';

const Circle = (context) => {
	const { data: { size, x, y }} = context;
	const style = {
		width: `${ size }vmin`,
		height: `${ size }vmin`,
		backgroundColor: 'black',
		borderRadius: '50%',
	};

	return <div>
		<div
			className="center circle"
			style={ {
				...style,
				left: `${ x }vmin`,
				top: `${ y }vmin`,
			} }
		/>
		<WrapObject { ...{ ...context, shapeStyle: style } }/></div>;
};

export default Circle;
