module.exports = (toolbox) => {
	const { print, parameters, template } = toolbox;

	function createTarget(src, dir) {
		return src || dir;
	}

	async function create(data) {
		const { type, src, name } = data;

		if (!type) return print.error('Type not specified!');

		if (!name) return print.error(`${type} name should be specified!`);

		// generate component
		await template.generate({
			template: 'component.js.ejs',
			target: createTarget(src, `src/${type}s/${name}/${type}.jsx`),
			props: { name: parameters.first },
		});

		// generate tests
		await template.generate({
			template: 'test.js.ejs',
			target: createTarget(`src/${type}s/${name}/${type}.test.js`),
			props: { name },
		});

		// generate styles
		await template.generate({
			template: 'style.js.ejs',
			target: createTarget(`src/${type}s/${name}/${type}.scss`),
			props: { name },
		});

		return print.success(`${name} ${type} created.`);
	}

	toolbox.create = create;
};
