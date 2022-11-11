import React from 'react';
import Square from './Square';

const BackGround = (context) => {
	const { config: { boardSize, two }} = context;

	const style = {
		position: 'relative',
		width: `${ boardSize }vMin`,
		height: `${ boardSize }vMin`,
		background: 'lightPink',
		top: `calc(50vh - ${ boardSize / two }vMin)`,
		left: `calc(50vw - ${ boardSize / two }vMin)`,
	};

	return <div style={ style }>
		<Square { ...context }/></div>;
};

export default BackGround;
