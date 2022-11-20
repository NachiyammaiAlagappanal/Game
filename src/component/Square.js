import React from 'react';
import WrapObject from './WrapObject';

const Square = (context) => {
	const { data: { size, x, y }, state: { color }} = context;
	const colorStyle = color !== '' ? color : 'black';
	const style = {
		width: `${ size }vmin`,
		height: `${ size }vmin`,
		backgroundColor: colorStyle,
	};

	return <div>
		<div
			className="center"
			style={ {
				...style,
				left: `${ x }vmin`,
				top: `${ y }vmin`,
				backgroundColor: colorStyle,
			} }
			onClick={ () => context.actions.changeColor(context) }
		/><WrapObject { ...{ ...context, shapeStyle: style } }/></div>;
};

export default Square;
