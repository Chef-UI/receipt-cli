module.exports = {
	name: 'new:page',
	description: 'Creates a page template.',
	run: async (toolbox) => {
		const { parameters, createTemplate, createTest, createStyle } = toolbox;

		const type = 'page';
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
