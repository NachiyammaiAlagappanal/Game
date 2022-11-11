import { rndBetween } from '@laufire/utils/random';
import React from 'react';

const getRandomMargin = ({ config: { boardSize, size, half }}) => {
	const limit = size / half;
	const margin = (boardSize - size) + half;

	return rndBetween(limit, margin);
};

const Square = (context) => {
	const { config: { size }} = context;

	return (
		<div
			style={ {
				position: 'absolute',
				left: `${ getRandomMargin(context) }vMin`,
				top: `${ getRandomMargin(context) }vMin`,
				width: `${ size }vMin`,
				height: `${ size }vMin`,
				backgroundColor: 'black',
				transform: 'translate(-50%, -50%)',
			} }
		/>);
};

export default Square;
