module.exports = {
	name: 'new:component',
	description: 'Creates a component template.',
	run: async (toolbox) => {
		const { parameters, createTemplate, createTest, createStyle, createTypes } = toolbox;
		const options = parameters.options;
		const ts = options.ts;

		const type = 'component';
		const name = parameters.first;

		const data = {
			type,
			name,
		};

		async function create() {
			await createTemplate(data);
			await createTest(data);
			await createStyle(data);

			if (ts) createTypes(data);
		}

		return create();
	},
};
