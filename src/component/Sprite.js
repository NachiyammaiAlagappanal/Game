/* eslint-disable no-console */
import React from 'react';
import Circle from './Circle';
import Square from './Square';
import Triangle from './Triangle';

const directions = {
	left: { x: 1, y: 0 },
	right: { x: -1, y: 0 },
	top: { x: 0, y: -1 },
	bottom: { x: 0, y: 1 },
};
const boardSize = 100;
const components = {
	circle: Circle,
	square: Square,
	triangle: Triangle,
};

const Shape = ({ type, ...data }) => {
	const { x, y, direction } = data;
	const Sprite = components[type];
	const newData = {
		...data,
		x: x + (directions[direction].x * boardSize),
		y: y + (directions[direction].y * boardSize),
	};

	console.log(data, newData);
	return <div>
		<Sprite { ...data }/>
		<Sprite { ...newData }/>
	</div>;
};

export default Shape;
