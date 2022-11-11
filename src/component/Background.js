import React from 'react';
import Square from './Square';

const BackGround = (context) => {
	const { config: { boardSize }} = context;

	const style = {
		position: 'absolute',
		width: `${ boardSize }vMin`,
		height: `${ boardSize }vMin`,
		background: 'lightPink',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	};

	return <div style={ style }>
		<Square { ...context }/></div>;
};

export default BackGround;
