module.exports = (toolbox) => {
	const { print, parameters, template } = toolbox;

	toolbox.createStyle = async (type) => {
		if (!type) return print.error('Internal error: type not defined for style!');

		const name = parameters.first;

		// generate style
		await template.generate({
			template: 'style.js.ejs',
			target: `src/${type}s/${name}/style.scss`,
			props: { name },
		});

		return print.success(`${name} ${type} style created.`);
	};
};
