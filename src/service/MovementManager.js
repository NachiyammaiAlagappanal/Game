/* eslint-disable no-magic-numbers */
const directions = {
	left: { x: -1, y: 0 },
	right: { x: 1, y: 0 },
	top: { x: 0, y: 1 },
	bottom: { x: 0, y: -1 },
};
const newValue = (
	shape, direction, distance, limit
) => (shape <= 0 && -limit >= shape
	? ((shape + (direction * distance)) + 100) % 100
	: (shape % 100) + (direction * distance));

const getXValue = (
	shape, boardSize, half, distance
) => {
	const limit = shape.size * half;
	const margin = boardSize - limit;
	const direction = directions[shape.direction];

	return limit >= shape.x || shape.x >= margin
		? newValue(
			shape.x, direction.x, distance, limit
		)
		: shape.x + (direction.x * distance);
};

const getYValue = (
	shape, boardSize, half, distance
) => {
	const limit = shape.size * half;
	const margin = boardSize - limit;
	const direction = directions[shape.direction];

	return limit >= shape.y || shape.y >= margin
		? (shape.y % 100) + (direction.y * distance)
		: shape.y + (direction.y * distance);
};

const MovementManager = {
	moveShapes: ({ state: { shapes },
		config: { distance, boardSize, half }}) =>
		shapes.map((shape) => ({
			...shape,
			x: getXValue(
				shape, boardSize, half, distance
			),
			y: getYValue(
				shape, boardSize, half, distance
			),
		})),
};

export default MovementManager;
