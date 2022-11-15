import MovementManager from '../service/MovementManager';
import ShapeManager from '../service/ShapeManager';

const addShapes = (context) => ({
	shapes: ShapeManager.addShape(context),
});
const manageMovement = (context) => ({
	shapes: MovementManager.movingShapes(context),
});

const actions = {
	addShapes,
	manageMovement,
};

export default actions;
