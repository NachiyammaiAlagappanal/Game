const MovementManager = {
	movingShapes: ({ state: { shapes }, config: { distance }}) =>
		shapes.map((shape) =>
			({
				...shape,
				x: shape.x + distance,
			})),
};

export default MovementManager;
