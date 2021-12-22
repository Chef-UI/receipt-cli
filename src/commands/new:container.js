module.exports = {
	name: 'new:container',
	description: 'Creates a container template.',
	run: async (toolbox) => {
		const { createTemplate, createTest, createStyle } = toolbox;

		const type = 'container';
		const name = parameters.first;

		const data = {
			type,
			name,
		};

		await createTemplate(data);
		await createTest(data);
		await createStyle(data);
	},
};
