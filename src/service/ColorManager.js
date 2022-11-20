const base = 16;
const lower = 2;
const upper = 8;
const ColorManager = {
	color: () => `#${ Math.random().toString(base)
		.slice(lower, upper) }`,

};

export default ColorManager;
