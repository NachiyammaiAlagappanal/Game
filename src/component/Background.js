import React from 'react';
import Square from './Square';

const BackGround = (context) => {
	const { config: { boardSize, half }} = context;

	const style = {
		position: 'relative',
		width: `${ boardSize }vMin`,
		height: `${ boardSize }vMin`,
		background: 'lightPink',
		top: `calc(50vh - ${ boardSize * half }vMin)`,
		left: `calc(50vw - ${ boardSize * half }vMin)`,
	};

	return <div style={ style }>
		<Square { ...context }/></div>;
};

export default BackGround;
