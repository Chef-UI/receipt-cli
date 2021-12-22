module.exports = (toolbox) => {
	const { print, parameters, template } = toolbox;

	toolbox.createTemplate = async (type) => {
		if (!type) return print.error('Internal error: type not defined for template!');

		const name = parameters.first;

		// generate template
		await template.generate({
			template: 'component.js.ejs',
			target: `src/${type}s/${name}/${type}.jsx`,
			props: { name },
		});

		return print.success(`${name} ${type} template created.`);
	};
};
