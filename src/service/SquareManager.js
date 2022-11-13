import { rndBetween } from '@laufire/utils/random';

const SquareManager = {

	getRandomMargin: (
		boardSize, size, half
	) => {
		const limit = size / half;
		const margin = (boardSize - size) + half;

		return rndBetween(limit, margin);
	},

	square: (context) => {
		const { config: { min, max, boardSize, half }} = context;
		const size = rndBetween(min, max);

		return {
			size: size,
			x: SquareManager.getRandomMargin(
				boardSize, size, half
			),
			y: SquareManager.getRandomMargin(
				boardSize, size, half
			),
		};
	},

};

export default SquareManager;
