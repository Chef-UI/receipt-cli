const { system, filesystem } = require('gluegun');

const local = filesystem.path(__dirname, '..');

const cli = async (cmd) =>
	system.run('node ' + filesystem.path(local, 'bin', 'receipt-cli') + ` ${cmd}`);

const newPage = 'new:page Home';
const newPageNamed = 'new:page Profile --named';
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

describe('new:page named', () => {
	beforeAll(async () => {
		output = await cli(newPageNamed);
	});
	afterAll(() => filesystem.remove('src/pages/'));

	test('should create Profile.jsx', async () => {
		const file = filesystem.find('src/pages/Profile', { matching: 'Profile.jsx' });

		expect(output).toContain('Profile page template created.');
		expect(file.length).toBe(1);
	});

	test('should create Profile.test.js', async () => {
		const file = filesystem.find('src/pages/Profile', { matching: 'Profile.test.js' });

		expect(output).toContain('Profile page tests created.');
		expect(file.length).toBe(1);
	});

	test('should create style file', async () => {
		const file = filesystem.find('src/pages/Profile', { matching: 'style.scss' });

		expect(output).toContain('Profile page style created.');
		expect(file.length).toBe(1);
	});
});