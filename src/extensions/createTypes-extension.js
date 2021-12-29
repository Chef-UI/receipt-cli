module.exports = (toolbox) => {
	const { print, template } = toolbox;

	toolbox.createTypes = async (data) => {
		const { type, name, src } = data;

		if (!type && !src) return print.error('Internal error: type not defined for style!');

		let target = `src/${type}s/${name}/types.ts`; // src/folder/file

		if (src) target = `${src}/${name}/types.ts`; // src/folder/file

		// generate style
		await template.generate({
			template: 'types.ts.ejs',
			target,
		});

		return src
			? print.success(`${name} types created.`)
			: print.success(`${name} ${type} types created.`);
	};
};
