const { system, filesystem } = require('gluegun');

const src = filesystem.path(__dirname, '..');

const cli = async (cmd) =>
	system.run('node ' + filesystem.path(src, 'bin', 'receipt-cli') + ` ${cmd}`);

const newPage = 'new:page Home';
let output;

describe('new:page', () => {
	beforeAll(async () => {
		output = await cli(newPage);
	});
	afterAll(() => filesystem.remove('src/pages/'));

	test('should create page file', async () => {
		const file = filesystem.find('src/pages/Home', { matching: 'page.jsx' });

		expect(output).toContain('Home page template created.');
		expect(file.length).toBe(1);
	});

	test('should create test file', async () => {
		const file = filesystem.find('src/pages/Home', { matching: 'page.test.js' });

		expect(output).toContain('Home page tests created.');
		expect(file.length).toBe(1);
	});

	test('should create style file', async () => {
		const file = filesystem.find('src/pages/Home', { matching: 'style.scss' });

		expect(output).toContain('Home page style created.');
		expect(file.length).toBe(1);
	});
});
