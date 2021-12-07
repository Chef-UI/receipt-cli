module.exports = {
	name: 'new:template',
	description: 'Creates a template inside the specific folder template.',
	run: async (toolbox) => {
		const { parameters, create } = toolbox;

		// should receive the directory and the template name
		const src = parameters.first;
		const name = parameters.second;

		const data = {
			name,
			src,
		};

		await create(data);
	},
};
