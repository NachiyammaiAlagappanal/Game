import React from 'react';
import Circle from './Circle';
import Square from './Square';
import Triangle from './Triangle';

const component = {
	Circle,
	Square,
	Triangle,
};

const Shapes = (context) => {
	const { state: { shapes }} = context;

	return shapes.map(({ type, distance, ...data }, index) => {
		const Shape = component[type];

		return <Shape key={ index } { ...{ ...context, distance, data } }/>;
	});
};

export default Shapes;
