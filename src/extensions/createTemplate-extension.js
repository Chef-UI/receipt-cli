module.exports = (toolbox) => {
	const { parameters, print, template } = toolbox;
	const options = parameters.options;

	function setTarget(info) {
		const { data, named, ts } = info;
		const { type, name } = data;
		const format = ts ? 'tsx' : 'jsx';

		if (named) return `src/${type}s/${name}/${name}.${format}`; // src/folder/file

		return `src/${type}s/${name}/${type}.${format}`; // src/folder/file
	}

	toolbox.createTemplate = async (data) => {
		const { type, name, src } = data;
		const named = options.named;
		const ts = options.ts;
		const info = {
			data,
			named,
			ts,
		};
		let target;

		if (!type && !src) return print.error('Internal error: type not defined for template!');

		if (src && named) return print.error('--named does not serve new:template!');

		if (src) target = `${src}/${name}/${name}.${ts ? 'tsx' : 'jsx'}`;
		else target = setTarget(info);

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
