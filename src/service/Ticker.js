const Ticker = {
	start: (context) => {
		const { config, actions } = context;

		return setInterval(() => actions.square(context),
			config.TickerDelay);
	},
};

export default Ticker;
