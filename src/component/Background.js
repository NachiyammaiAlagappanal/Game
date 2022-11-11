import React from 'react';
import Square from './Square';

const BackGround = (context) => {
	const { config: { boardSize }} = context;

	const style = {
		width: `${ boardSize }vMin`,
		height: `${ boardSize }vMin`,
		background: 'lightPink',
		margin: 'auto',
	};

	return <div style={ style }>
		<Square { ...context }/></div>;
};

export default BackGround;
