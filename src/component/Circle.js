import React from 'react';
import WrapObject from './WrapObject';

const Circle = (context) => {
	const { data: { size, x, y }} = context;

	return <div>
		<div
			className="center circle"
			style={ {
				left: `${ x }vmin`,
				top: `${ y }vmin`,
				width: `${ size }vmin`,
				height: `${ size }vmin`,
				backgroundColor: 'black',
			} }
		/>
		<WrapObject { ...{ ...context, className: 'circle' } }/></div>;
};

export default Circle;
