import { rndBetween, rndValue } from '@laufire/utils/random';
import ColorManager from './ColorManager';

const Fields = ['square', 'circle', 'triangle'];
const Directions = ['right', 'left', 'top', 'bottom'];

const ShapeManager = {

	getRandomMargin: (size, { boardSize, half }) => {
		const limit = size * half;
		const margin = boardSize - (size * half);

		return rndBetween(limit, margin);
	},

	addShape: (context) => {
		const { config: { min, max }, config,
			state: { shapes }} = context;
		const size = rndBetween(min, max);
		const maxSquare = 10;

		return [...shapes,
			...maxSquare > shapes.length
				? [{
					size: size,
					x: ShapeManager.getRandomMargin(size, config),
					y: ShapeManager.getRandomMargin(size, config),
					type: rndValue(Fields),
					direction: rndValue(Directions),
					colorValue: ColorManager.color(context),
				}]
				: []];
	},

};

export default ShapeManager;
