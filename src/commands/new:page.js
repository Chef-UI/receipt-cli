module.exports = {
	name: 'new:page',
	description: 'Creates a page template.',
	run: async (toolbox) => {
		const { parameters, create } = toolbox;

		const name = parameters.first;

		const data = {
			name,
			type: 'page',
		};

		await create(data);
	},
};
