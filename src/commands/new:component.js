module.exports = {
	name: 'new:component',
	description: 'Creates a component template.',
	run: async (toolbox) => {
		const { create, handleNamed } = toolbox;

		const data = handleNamed('component');

		await create(data);
	},
};
