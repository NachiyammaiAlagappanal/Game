/* eslint-disable no-magic-numbers */
import React from 'react';

const border = 100;

const Circle = ({ data: { size, x, y }}) =>
	<div>
		<div
			className="center circle"
			style={ {
				left: `${ x }vmin`,
				top: `${ y }vmin`,
				width: `${ size }vmin`,
				height: `${ size }vmin`,
			} }
		/>
		<div
			className="center circle"
			style={ {
				left: `${ (x - 100) % (100 - (size * 0.5)) }vmin`,
				top: `${ y % border }vmin`,
				width: `${ size }vmin`,
				height: `${ size }vmin`,
			} }
		/></div>;

export default Circle;
