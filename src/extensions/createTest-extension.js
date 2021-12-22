module.exports = (toolbox) => {
	const { parameters, print, template } = toolbox;
	const options = parameters.options;

	function setTarget(named, data) {
		const { type, name } = data;

		if (named) return `src/${type}s/${name}/${name}.test.js`; // src/folder/file

		return `src/${type}s/${name}/${type}.test.js`; // src/folder/file
	}

	toolbox.createTest = async (data) => {
		const { type, name, src } = data;
		const named = options.named;
		let target;

		if (!type && !src) return print.error('Internal error: type not defined for tests!');

		if (src && named) return print.error('--named does not serve new:template!');

		if (src) target = `${src}/${name}/${name}.test.js`;
		// src/folder/file
		else target = setTarget(named, data);

		// generate test
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
