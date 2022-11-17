const directions = {
	left: { x: -1, y: 0 },
	right: { x: 1, y: 0 },
	top: { x: 0, y: 1 },
	bottom: { x: 0, y: -1 },
};

const MovementManager = {
	movingShapes: ({ state: { shapes }, config: { distance }}) =>
		shapes.map((shape) => {
			const direction = directions[shape.direction];

			return {
				...shape,
				x: shape.x + (direction.x * distance),
				y: shape.y + (direction.y * distance),
			};
		}),
};

export default MovementManager;
