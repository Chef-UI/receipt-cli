module.exports = {
	name: 'new:template',
	description: 'Creates a template inside the specific folder template.',
	run: async (toolbox) => {
		const { parameters, createTemplate, createTest, createStyle } = toolbox;

		const src = parameters.first;
		const name = parameters.second;

		const data = {
			name,
			src,
		};

		await createTemplate(data);
		await createTest(data);
		await createStyle(data);
	},
};
