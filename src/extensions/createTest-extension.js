module.exports = (toolbox) => {
	const { parameters, print, template } = toolbox;
	const options = parameters.options;

	function setTarget(info) {
		const { data, named, ts } = info;
		const { type, name } = data;
		const format = ts ? 'tsx' : 'js';

		if (named) return `src/${type}s/${name}/${name}.test.${format}`; // src/folder/file

		return `src/${type}s/${name}/${type}.test.${format}`; // src/folder/file
	}

	function setTemplateType(info) {
		const { data, named } = info;
		const { type, name } = data;

		if (named) return name;
		return type;
	}

	toolbox.createTest = async (data) => {
		const { type, name, src } = data;
		const named = options.named;
		const ts = options.ts;
		const info = {
			data,
			named,
			ts,
		};
		let target;
		let templateType = setTemplateType(info);

		if (!type && !src) return print.error('Internal error: type not defined for tests!');

		if (src && named) return print.error('--named does not serve new:template!');

		if (src) target = `${src}/${name}/${name}.test.${ts ? 'tsx' : 'js'}`;
		else target = setTarget(info);

		// generate test
		await template.generate({
			template: 'test.js.ejs',
			props: { name, templateType },
			target,
		});

		return src
			? print.success(`${name} tests created.`)
			: print.success(`${name} ${type} tests created.`);
	};
};
