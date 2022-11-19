import React from 'react';
import WrapObject from './WrapObject';

const Square = (context) => {
	const { data: { size, x, y }} = context;

	return <div>
		<div
			className="center"
			style={ {
				width: `${ size }vmin`,
				height: `${ size }vmin`,
				backgroundColor: 'black',
				left: `${ x }vmin`,
				top: `${ y }vmin`,
			} }
		/>
		<WrapObject { ...{ ...context, className: '' } }/></div>;
};

export default Square;
