import MovementManager from '../service/MovementManager';
import ShapeManager from '../service/ShapeManager';
// import WarpManager from '../service/WarpManager';

const addShapes = (context) => ({
	shapes: ShapeManager.addShape(context),
});
const manageMovement = (context) => ({
	shapes: MovementManager.movingShapes(context),
});
// const warpManager = (context) => ({
// 	shapes: WarpManager.movingShapes(context),
// });

const actions = {
	addShapes,
	manageMovement,
	// warpManager,
};

export default actions;
