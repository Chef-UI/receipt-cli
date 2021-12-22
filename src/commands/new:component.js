module.exports = {
	name: 'new:component',
	description: 'Creates a component template.',
	run: async (toolbox) => {
		const { createTemplate, createTest, createStyle } = toolbox;

		const type = 'component';

		await createTemplate(type);
		await createTest(type);
		await createStyle(type);
	},
};
