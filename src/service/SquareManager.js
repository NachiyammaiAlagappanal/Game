import { rndBetween } from '@laufire/utils/random';

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
			state: { squares }} = context;
		const size = rndBetween(min, max);
		const maxSquare = 10;

		return [...squares,
			...maxSquare > squares.length
				? [{
					size: size,
					x: SquareManager.getRandomMargin(
						boardSize, size, half
					),
					y: SquareManager.getRandomMargin(
						boardSize, size, half
					),
				}]
				: []];
	},
};

export default SquareManager;
