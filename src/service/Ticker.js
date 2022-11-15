const Ticker = {
	start: (context) => {
		const { config, actions } = context;

		return setInterval(() => actions.addShapes(context),
			config.TickerDelay);
	},
};

export default Ticker;
