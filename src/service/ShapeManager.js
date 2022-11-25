import { rndBetween, rndString, rndValue } from '@laufire/utils/random';
import ColorManager from './ColorManager';

const Fields = ['square', 'circle', 'triangle'];
const Directions = ['left', 'right', 'top', 'bottom'];
const idLength = 4;

const ShapeManager = {

	getRandomMargin: (size, { boardSize, half }) => {
		const limit = size * half;
		const margin = boardSize - (size * half);

		return rndBetween(limit, margin);
	},

	changeColor: (context) => {
		const { state: { shapes }, data } = context;

		return shapes.map((shape) => (shape.id === data.data
			? { ...shape, color: ColorManager.color() }
			: shape));
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
					id: rndString(idLength),
					color: 'black',
				}]
				: []];
	},

};

export default ShapeManager;
