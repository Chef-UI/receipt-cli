module.exports = {
	name: 'new:container',
	description: 'Creates a container template.',
	run: async (toolbox) => {
		const { create, handleNamed } = toolbox;

		const data = handleNamed('container');

		await create(data);
	},
};
