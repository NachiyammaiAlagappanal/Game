import Shape from './Sprite';

const Shapes = (context) => {
	const { state: { shapes }} = context;

	return shapes.map(Shape);
};

export default Shapes;
