import SquareManager from '../service/SquareManager';

const square = (context) => ({
	square: SquareManager.square(context),
});

const actions = {
	square,
};

export default actions;
