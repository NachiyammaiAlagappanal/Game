import { rndBetween } from '@laufire/utils/lib';

const range = 360;
const limit = 100;

const alpha = 1;

const ColorManager = {
	color: () => `hsla(${ rndBetween(0, range) },
	${ rndBetween(0, limit) }%,${ rndBetween(0, limit) }%,${ alpha })`,
};

export default ColorManager;
