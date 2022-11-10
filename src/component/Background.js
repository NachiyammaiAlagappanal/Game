import React from 'react';
import Square from './Square';

const BackGround = (context) => <div className="set-background">
	<Square { ...context }/></div>;

export default BackGround;
