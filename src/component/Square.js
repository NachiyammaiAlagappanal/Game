import React from 'react';

const Square = (context) => {
	const { state: { square: { size, x, y }}} = context;

	return (
		<div
			style={ {
				position: 'absolute',
				left: `${ x }vMin`,
				top: `${ y }vMin`,
				width: `${ size }vMin`,
				height: `${ size }vMin`,
				backgroundColor: 'black',
				transform: 'translate(-50%, -50%)',
			} }
		/>);
};

export default Square;
