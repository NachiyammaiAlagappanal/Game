import SquareManager from '../service/SquareManager';

const replaceSquare = (context) => ({
	square: SquareManager.square(context),
});

const actions = {
	replaceSquare,
};

export default actions;
