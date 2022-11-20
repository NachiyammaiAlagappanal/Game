import React from 'react';
import Shape from './Sprite';

const Shapes = (context) => {
	const { state: { shapes }} = context;

	return shapes.map((shape, index) =>
		<Shape key={ index } { ...{ ...context, data: shape } }/>);
};

export default Shapes;
