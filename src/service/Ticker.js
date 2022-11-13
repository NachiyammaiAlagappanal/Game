const Ticker = {
	start: (context) => {
		const { config, actions } = context;

		return setInterval(() => actions.replaceSquare(context),
			config.TickerDelay);
	},
};

export default Ticker;
