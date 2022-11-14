import SquareManager from '../service/SquareManager';

const replaceSquare = (context) => ({
	shapes: SquareManager.square(context),
});

const actions = {
	replaceSquare,
};

export default actions;
