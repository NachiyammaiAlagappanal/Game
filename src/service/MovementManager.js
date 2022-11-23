/* eslint-disable no-magic-numbers */
const directions = {
	left: { x: -1, y: 0 },
	right: { x: 1, y: 0 },
	top: { x: 0, y: 1 },
	bottom: { x: 0, y: -1 },
};

const getXValue = (
	shape, boardSize, half, distance
) => {
	const limit = shape.size * half;
	const direction = directions[shape.direction];

	return shape.x >= (0 - limit) && shape.x <= (100 + limit)
		? shape.x + (direction.x * distance)
		: (shape.x + (direction.x * distance) + 100) % 100;
};

const getYValue = (
	shape, boardSize, half, distance
) => {
	const limit = shape.size * half;
	const direction = directions[shape.direction];

	return shape.y >= (0 - limit) || shape.y <= (100 + limit)
		? shape.y + (direction.y * distance)
		: (shape.y + (direction.y * distance) + 100) % 100
	;
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
