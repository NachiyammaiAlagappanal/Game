import { rndBetween, rndValue } from '@laufire/utils/random';

const Fields = ['Square', 'Circle', 'Triangle'];
const Directions = ['left', 'right', 'top', 'bottom'];

const ShapeManager = {

	getRandomMargin: (
		boardSize, size, half
	) => {
		const limit = size * half;
		const margin = boardSize - (size * half);

		return rndBetween(limit, margin);
	},

	addShape: (context) => {
		const { config: { min, max, boardSize, half },
			state: { shapes }} = context;
		const size = rndBetween(min, max);
		const maxSquare = 10;

		return [...shapes,
			...maxSquare > shapes.length
				? [{
					size: size,
					x: ShapeManager.getRandomMargin(
						boardSize, size, half
					),
					y: ShapeManager.getRandomMargin(
						boardSize, size, half
					),
					type: rndValue(Fields),
					direction: rndValue(Directions),
				}]
				: []];
	},

};

export default ShapeManager;
