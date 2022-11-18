import { rndBetween, rndValue } from '@laufire/utils/random';

const Fields = ['Square'];
const Directions = ['right'];

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
		const maxSquare = 1;

		return [...shapes,
			...maxSquare > shapes.length
				? [{
					size: size,
					x1: ShapeManager.getRandomMargin(
						boardSize, size, half
					),
					y1: ShapeManager.getRandomMargin(
						boardSize, size, half
					),
					type: rndValue(Fields),
					direction: rndValue(Directions), x: 95, y: 50,
				}]
				: []];
	},

};

export default ShapeManager;
