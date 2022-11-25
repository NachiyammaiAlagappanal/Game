import MovementManager from '../service/MovementManager';
import ShapeManager from '../service/ShapeManager';

const addShapes = (context) => ({
	shapes: ShapeManager.addShape(context),
});
const manageMovement = (context) => ({
	shapes: MovementManager.moveShapes(context),
});

const changeColor = (context) => ({
	shapes: ShapeManager.changeColor(context),
});
const actions = {
	addShapes,
	manageMovement,
	changeColor,
};

export default actions;
