const directions = {
	left: { x: -1, y: 0 },
	right: { x: 1, y: 0 },
	top: { x: 0, y: 1 },
	bottom: { x: 0, y: -1 },
};

const half = 0.5;
const boardSize = 100;

const getValue = (
	shape, distance, axis
) => {
	const limit = shape.size * half;
	const direction = directions[shape.direction];

	return shape[axis] >= (0 - limit) && shape[axis] <= (boardSize + limit)
		? shape[axis] + (direction[axis] * distance)
		: (shape[axis] + (direction[axis] * distance) + boardSize) % boardSize;
};

const MovementManager = {
	moveShapes: ({ state: { shapes },
		config: { distance }}) =>
		shapes.map((shape) => ({
			...shape,
			x: getValue(
				shape, distance, 'x'
			),
			y: getValue(
				shape, distance, 'y'
			),
		})),
};

export default MovementManager;
