module.exports = (toolbox) => {
	const { print, template } = toolbox;

	function createTarget(data, file) {
		const { type, src, name } = data;

		return type ? `src/${type}s/${name}/${type}.${file}` : `${src}/${name}/${name}.${file}`;
	}

	async function create(data) {
		const { name, type } = data;

		if (!name) return print.error(`${type} name should be specified!`);

		// generate component
		await template.generate({
			template: 'component.js.ejs',
			target: createTarget(data, 'jsx'),
			props: { name },
		});

		// generate tests
		await template.generate({
			template: 'test.js.ejs',
			target: createTarget(data, 'test.js'),
			props: { name },
		});

		// generate styles
		await template.generate({
			template: 'style.js.ejs',
			target: createTarget(data, 'scss'),
			props: { name },
		});

		return print.success(`${name} ${type} created.`);
	}

	toolbox.create = create;
};
