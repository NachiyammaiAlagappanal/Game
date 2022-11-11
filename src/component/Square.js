import React from 'react';

const Square = (context) => {
	const { config: { size, boardSize, two }} = context;

	const margin = (boardSize / two) - (size / two);

	return (
		<div
			style={ {
				position: 'absolute',
				left: `${ margin }vMin`,
				top: `${ margin }vMin`,
				width: `${ size }vMin`,
				height: `${ size }vMin`,
				backgroundColor: 'black',
			} }
		/>);
};

export default Square;
