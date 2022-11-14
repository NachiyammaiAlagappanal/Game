import { rndBetween, rndValue } from '@laufire/utils/random';

const Fields = ['Square', 'Circle'];

const SquareManager = {

	getRandomMargin: (
		boardSize, size, half
	) => {
		const limit = size * half;
		const margin = boardSize - (size * half);

		return rndBetween(limit, margin);
	},

	square: (context) => {
		const { config: { min, max, boardSize, half },
			state: { shapes }} = context;
		const size = rndBetween(min, max);
		const maxSquare = 10;

		return [...shapes,
			...maxSquare > shapes.length
				? [{
					size: size,
					x: SquareManager.getRandomMargin(
						boardSize, size, half
					),
					y: SquareManager.getRandomMargin(
						boardSize, size, half
					),
					type: rndValue(Fields),
				}]
				: []];
	},
};

export default SquareManager;
