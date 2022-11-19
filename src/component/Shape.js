import React from 'react';
import Circle from './Circle';
import Square from './Square';
import Triangle from './Triangle';

const component = {
	circle: Circle,
	square: Square,
	triangle: Triangle,
};

const Shapes = (context) => {
	const { state: { shapes }} = context;

	return shapes.map(({ type, ...data }, index) => {
		const Shape = component[type];

		return <Shape key={ index } { ...{ ...context, data } }/>;
	});
};

export default Shapes;
