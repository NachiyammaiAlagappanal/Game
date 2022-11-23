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

const sprites = {
	circle: Circle,
	square: Square,
	triangle: Triangle,
};

const Shape = (context) => {
	const { data: { type, ...rest }} = context;
	const { x, y, direction } = rest;
	const Sprite = sprites[type];
	const doubleData = {
		...rest,
		x: x + (directions[direction].x * boardSize),
		y: y + (directions[direction].y * boardSize),
	};

	return <div>
		<Sprite { ...context }/>
		<Sprite { ...{ ...context, data: doubleData } }/>
	</div>;
};

export default Shape;
