import SquareManager from '../service/SquareManager';

const addShapes = (context) => ({
	shapes: SquareManager.addShape(context),
});

const actions = {
	addShapes,
};

export default actions;
