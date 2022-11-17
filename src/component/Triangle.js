/* eslint-disable no-magic-numbers */
import React from 'react';

const limit = 100;
const Triangle = ({ data: { size, x, y }, config: { half }}) => {
	const border = {
		borderLeft: `${ size * half }vmin solid transparent`,
		borderRight: `${ size * half }vmin solid transparent`,
		borderBottom: `${ size }vmin solid black`,
	};

	return <>
		<div
			className="center"
			style={ { ... border,
				left: `${ x }vmin`,
				top: `${ y }vmin` } }
		/>
		<div
			className="center"
			style={ { ...border,
				left: `${ (x - 100) % (100 - (size * 0.5)) }vmin`,
				top: `${ y % limit }vmin` } }
		/></>;
};

export default Triangle;
