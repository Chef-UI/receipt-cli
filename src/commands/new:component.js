module.exports = {
	name: 'new:component',
	description: 'Creates a component template.',
	run: async (toolbox) => {
		const { parameters, create } = toolbox;

		const name = parameters.first;

		const data = {
			name,
			type: 'component',
		};

		await create(data);
	},
};
