const { system, filesystem } = require('gluegun');

const local = filesystem.path(__dirname, '..');

const cli = async (cmd) =>
	system.run('node ' + filesystem.path(local, 'bin', 'receipt-cli') + ` ${cmd}`);

const dir = 'src/steps';
const newTemplate = `new:template ${dir} Login`;
const src = `${dir}/Login`;
let output;

describe('new:template', () => {
	beforeAll(async () => {
		output = await cli(newTemplate);
	});
	afterAll(() => filesystem.remove(dir));

	test('should create template file', async () => {
		const file = filesystem.find(src, { matching: 'Login.jsx' });
		const content = filesystem.read(`${src}/Login.jsx`);

		expect(output).toContain('Login template created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`// Login template`);
	});

	test('should create test file', async () => {
		const file = filesystem.find(src, { matching: 'Login.test.js' });
		const content = filesystem.read(`${src}/Login.test.js`);

		expect(output).toContain('Login tests created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`// Login test`);
	});

	test('should create style file', async () => {
		const file = filesystem.find(src, { matching: 'style.scss' });
		const content = filesystem.read(`${src}/style.scss`);

		expect(output).toContain('Login style created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`.Login {`);
	});
});
