import React from 'react';

const Square = (context) => {
	const { state: { square: { size, x, y }}} = context;

	return (
		<div
			className="center"
			style={ {
				left: `${ x }vMin`,
				top: `${ y }vMin`,
				width: `${ size }vMin`,
				height: `${ size }vMin`,
				backgroundColor: 'black',
			} }
		/>);
};

export default Square;
