import React from 'react';

const center = 48;

const Square = (context) => {
	const { config: { size }} = context;

	return (
		<div
			style={ {
				position: 'absolute',
				left: `${ center }vMin`,
				top: `${ center }vMin`,
				width: size,
				height: size,
				backgroundColor: 'white',
			} }
		/>);
};

export default Square;
