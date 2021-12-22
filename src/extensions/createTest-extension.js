module.exports = (toolbox) => {
	const { print, parameters, template } = toolbox;

	toolbox.createTest = async (type) => {
		if (!type) return print.error('Internal error: type not defined for tests!');

		const name = parameters.first;

		// generate tests
		await template.generate({
			template: 'test.js.ejs',
			target: `src/${type}s/${name}/${type}.test.js`,
			props: { name },
		});

		return print.success(`${name} ${type} tests created.`);
	};
};
