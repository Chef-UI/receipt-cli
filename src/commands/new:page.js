module.exports = {
	name: 'new:page',
	description: 'Creates a page template.',
	run: async (toolbox) => {
		const { create, handleNamed } = toolbox;

		const data = handleNamed('page');

		await create(data);
	},
};
