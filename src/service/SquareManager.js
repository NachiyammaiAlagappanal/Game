import { rndBetween } from '@laufire/utils/random';

const SquareManager = {

	getRandomMargin: ({ config: { boardSize, size, half }}) => {
		const limit = size / half;
		const margin = (boardSize - size) + half;

		return rndBetween(limit, margin);
	},

	square: (context) => {
		const { config: { size }} = context;

		return {
			size: size,
			x: SquareManager.getRandomMargin(context),
			y: SquareManager.getRandomMargin(context),
		};
	},

};

export default SquareManager;
