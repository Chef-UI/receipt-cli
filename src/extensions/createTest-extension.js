module.exports = (toolbox) => {
	const { print, template } = toolbox;

	toolbox.createTest = async (data) => {
		const { type, name, src } = data;

		if (!type && !src) return print.error('Internal error: type not defined for tests!');

		let target = `src/${type}s/${name}/${type}.test.js`;

		if (src) target = `${src}/${name}/${name}.test.js`; // src/folder/file

		// generate tests
		await template.generate({
			template: 'test.js.ejs',
			props: { name },
			target,
		});

		return src
			? print.success(`${name} tests created.`)
			: print.success(`${name} ${type} tests created.`);
	};
};
