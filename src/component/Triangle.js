import React from 'react';
import WrapObject from './WrapObject';

const Triangle = (context) => {
	const { data: { size, x, y }, config: { half }} = context;

	const style = {
		borderLeft: `${ size * half }vmin solid transparent`,
		borderRight: `${ size * half }vmin solid transparent`,
		borderBottom: `${ size }vmin solid black`,
	};

	return <div>
		<div
			className="center"
			style={ { ... style,
				left: `${ x }vmin`,
				top: `${ y }vmin` } }
		/>
		<WrapObject { ...{ ...context, shapeStyle: style } }/>
	</div>;
};

export default Triangle;
