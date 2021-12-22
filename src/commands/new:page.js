module.exports = {
	name: 'new:page',
	description: 'Creates a page template.',
	run: async (toolbox) => {
		const { createTemplate, createTest, createStyle } = toolbox;

		const type = 'page';

		await createTemplate(type);
		await createTest(type);
		await createStyle(type);
	},
};
