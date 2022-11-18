import { range } from '@laufire/utils/collection';

const squareCount = 9;
const xSpeed = 1;

const ticks = range(0, squareCount);
const xStart = 96;
const yStart = 10;
const ySpeed = 10;

const squares = ticks.map((tick) => ({
	x: xStart + (tick * xSpeed),
	y: yStart + (tick * ySpeed),
	size: 6,
	type: 'Square',
	direction: 'right',
}));

const seed = {
	shapes: squares,
};

export default seed;
