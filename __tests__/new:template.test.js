const { system, filesystem } = require('gluegun');

const local = filesystem.path(__dirname, '..');

const cli = async (cmd) =>
	system.run('node ' + filesystem.path(local, 'bin', 'receipt-cli') + ` ${cmd}`);

const dir = 'src/steps';
const newTemplate = `new:template ${dir} Window`;
const newTemplateTs = `new:template ${dir} Screen --ts`;
let src;
let output;
let content;

describe('new:template', () => {
	beforeAll(async () => {
		output = await cli(newTemplate);
		src = `${dir}/Window`;
	});
	afterAll(() => filesystem.remove(dir));

	test('should create template file', async () => {
		const file = filesystem.find(src, { matching: 'Window.jsx' });
		content = filesystem.read(`${src}/Window.jsx`);

		expect(output).toContain('Window template created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`// Window template`);
	});

	test('should create test file', async () => {
		const file = filesystem.find(src, { matching: 'Window.test.js' });
		content = filesystem.read(`${src}/Window.test.js`);

		expect(output).toContain('Window tests created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`// Window test`);
	});

	test('should create style file', async () => {
		const file = filesystem.find(src, { matching: 'style.scss' });
		content = filesystem.read(`${src}/style.scss`);

		expect(output).toContain('Window style created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`.Window {`);
	});
});

describe('new:template typescript', () => {
	beforeAll(async () => {
		output = await cli(newTemplateTs);
		src = `${dir}/Screen`;
	});
	afterAll(() => filesystem.remove(dir));

	test('should create template file', async () => {
		const file = filesystem.find(src, { matching: 'Screen.tsx' });
		content = filesystem.read(`${src}/Screen.tsx`);

		expect(output).toContain('Screen template created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`// Screen template`);
	});

	test('should create test file', async () => {
		const file = filesystem.find(src, { matching: 'Screen.test.tsx' });
		content = filesystem.read(`${src}/Screen.test.tsx`);

		expect(output).toContain('Screen tests created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`// Screen test`);
	});

	test('should create style file', async () => {
		const file = filesystem.find(src, { matching: 'style.scss' });
		content = filesystem.read(`${src}/style.scss`);

		expect(output).toContain('Screen style created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`.Screen {`);
	});
});
