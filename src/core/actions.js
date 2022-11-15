import MovementManager from '../service/MovementManager';
import SquareManager from '../service/SquareManager';

const addShapes = (context) => ({
	shapes: SquareManager.addShape(context),
});
const manageMovement = (context) => ({
	shapes: MovementManager.movingShapes(context),
});

const actions = {
	addShapes,
	manageMovement,
};

export default actions;
