module.exports = (toolbox) => {
	const { print, template } = toolbox;

	toolbox.createStyle = async (data) => {
		const { type, name, src } = data;

		if (!type && !src) return print.error('Internal error: type not defined for style!');

		let target = `src/${type}s/${name}/style.scss`;

		if (src) target = `${src}/${name}/style.scss`; // src/folder/file

		// generate style
		await template.generate({
			template: 'style.js.ejs',
			props: { name },
			target,
		});

		return src
			? print.success(`${name} style created.`)
			: print.success(`${name} ${type} style created.`);
	};
};
