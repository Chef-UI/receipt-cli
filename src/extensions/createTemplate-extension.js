module.exports = (toolbox) => {
	const { print, template } = toolbox;

	toolbox.createTemplate = async (data) => {
		const { type, name, src } = data;

		if (!type && !src) return print.error('Internal error: type not defined for template!');

		let target = `src/${type}s/${name}/${type}.jsx`;

		if (src) target = `${src}/${name}/${name}.jsx`; // src/folder/file

		// generate template
		await template.generate({
			template: 'component.js.ejs',
			props: { name },
			target,
		});

		return src
			? print.success(`${name} template created.`)
			: print.success(`${name} ${type} template created.`);
	};
};
