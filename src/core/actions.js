import ColorManager from '../service/ColorManager';
import MovementManager from '../service/MovementManager';
import ShapeManager from '../service/ShapeManager';

const addShapes = (context) => ({
	shapes: ShapeManager.addShape(context),
});
const manageMovement = (context) => ({
	shapes: MovementManager.movingShapes(context),
});
const changeColor = (context) => ({	color: ColorManager.color(context) });

const actions = {
	addShapes,
	manageMovement,
	changeColor,
};

export default actions;
