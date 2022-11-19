/* eslint-disable no-magic-numbers */
const directions = {
	left: { x: -1, y: 0 },
	right: { x: 1, y: 0 },
	top: { x: 0, y: 1 },
	bottom: { x: 0, y: -1 },
};

const getValue = (shape, { boardSize, half }) => {
	const limit = shape.size * half;
	const margin = boardSize - limit;

	return limit >= shape || shape >= margin
		? shape % 100
		: shape;
};

const MovementManager = {
	movingShapes: ({ state: { shapes },
		config: { distance }, config }) =>
		shapes.map((shape) => {
			const direction = directions[shape.direction];

			return { ...shape,
				x: getValue(shape.x, config) + (direction.x * distance),
				y: getValue(shape.y, config) + (direction.y * distance) };
		}),
};

export default MovementManager;
