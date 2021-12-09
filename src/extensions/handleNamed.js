module.exports = (toolbox) => {
	const { print, parameters } = toolbox;

	const options = parameters.options;

	function handleNamed(type) {
		const name = parameters.first;

		if (!name) print.error('name should be specified!');

		const data = {
			name,
			type,
		};

		if (options.named) data.named = true;

		return data;
	}

	toolbox.handleNamed = handleNamed;
};
