module.exports = {
	name: 'new:container',
	description: 'Creates a container template.',
	run: async (toolbox) => {
		const { parameters, create } = toolbox;

		const name = parameters.first;

		const data = {
			name,
			type: 'container',
		};

		await create(data);
	},
};
