import SquareManager from '../service/SquareManager';

const replaceSquare = (context) => ({
	squares: SquareManager.square(context),
});

const actions = {
	replaceSquare,
};

export default actions;
