import { rndBetween, rndString, rndValue } from '@laufire/utils/random';
import ColorManager from './ColorManager';

const Fields = ['square', 'circle', 'triangle'];
const Directions = ['left'];
const idLength = 4;

const ShapeManager = {

	getRandomMargin: (size, { boardSize, half }) => {
		const limit = size * half;
		const margin = boardSize - (size * half);

		return rndBetween(limit, margin);
	},

	changeColor: (context) => {
		const { state: { shapes, colors }, data } = context;

		const result = shapes.find((shape) => shape.id === data.data);

		return [...colors, { ...result, color: ColorManager.color() }];
	},

	addShape: (context) => {
		const { config: { min, max }, config,
			state: { shapes }} = context;
		const size = rndBetween(min, max);
		const maxSquare = 1;

		return [...shapes,
			...maxSquare > shapes.length
				? [{
					size: size,
					x: ShapeManager.getRandomMargin(size, config),
					y: ShapeManager.getRandomMargin(size, config),
					type: rndValue(Fields),
					direction: rndValue(Directions),
					id: rndString(idLength),
				}]
				: []];
	},

};

export default ShapeManager;
