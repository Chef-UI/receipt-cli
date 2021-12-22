module.exports = (toolbox) => {
	const { parameters, print, template } = toolbox;
	const options = parameters.options;

	function setTarget(named, data) {
		const { type, name } = data;

		if (named) return `src/${type}s/${name}/${name}.jsx`; // src/folder/file

		return `src/${type}s/${name}/${type}.jsx`; // src/folder/file
	}

	toolbox.createTemplate = async (data) => {
		const { type, name, src } = data;
		const named = options.named;
		let target;

		if (!type && !src) return print.error('Internal error: type not defined for template!');

		if (src && named) return print.error('--named does not serve new:template!');

		if (src) target = `${src}/${name}/${name}.jsx`;
		// src/folder/file
		else target = setTarget(named, data);

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
