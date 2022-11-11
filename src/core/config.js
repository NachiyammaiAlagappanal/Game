import { rndBetween } from '@laufire/utils/lib';
const min = 5;
const max = 10;

const config = {
	size: rndBetween(min, max),
	boardSize: 75,
	two: 2,
};

export default config;
