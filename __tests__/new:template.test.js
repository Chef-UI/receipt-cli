const { system, filesystem } = require('gluegun');

const local = filesystem.path(__dirname, '..');

const cli = async (cmd) =>
	system.run('node ' + filesystem.path(local, 'bin', 'receipt-cli') + ` ${cmd}`);

const src = 'src/steps';
const newTemplate = `new:template ${src} Login`;
const dir = `${src}/Login`;
let output;

describe('new:template', () => {
	beforeAll(async () => {
		output = await cli(newTemplate);
	});
	afterAll(() => filesystem.remove(src));

	test('should create template file', async () => {
		const file = filesystem.find(dir, { matching: 'Login.jsx' });

		expect(output).toContain('Login template created.');
		expect(file.length).toBe(1);
	});

	test('should create test file', async () => {
		const file = filesystem.find(dir, { matching: 'Login.test.js' });

		expect(output).toContain('Login tests created.');
		expect(file.length).toBe(1);
	});

	test('should create style file', async () => {
		const file = filesystem.find(dir, { matching: 'style.scss' });

		expect(output).toContain('Login style created.');
		expect(file.length).toBe(1);
	});
});
