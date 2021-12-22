module.exports = {
	name: 'new:component',
	description: 'Creates a component template.',
	run: async (toolbox) => {
		const { parameters, createTemplate, createTest, createStyle } = toolbox;

		const type = 'component';
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
