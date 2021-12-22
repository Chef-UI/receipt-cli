module.exports = {
	name: 'new:container',
	description: 'Creates a container template.',
	run: async (toolbox) => {
		const { createTemplate, createTest, createStyle } = toolbox;

		const type = 'container';

		await createTemplate(type);
		await createTest(type);
		await createStyle(type);
	},
};
