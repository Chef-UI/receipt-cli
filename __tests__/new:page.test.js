const { system, filesystem } = require('gluegun');

const local = filesystem.path(__dirname, '..');

const cli = async (cmd) =>
	system.run('node ' + filesystem.path(local, 'bin', 'receipt-cli') + ` ${cmd}`);

const newPage = 'new:page Home';
const newPageNamed = 'new:page Profile --named';
let output;
let src;
let content;

describe('new:page', () => {
	beforeAll(async () => {
		output = await cli(newPage);
		src = 'src/pages/Home';
	});
	afterAll(() => filesystem.remove('src/pages/'));

	test('should create page file', async () => {
		const file = filesystem.find('src/pages/Home', { matching: 'page.jsx' });
		content = filesystem.read(`${src}/page.jsx`);

		expect(output).toContain('Home page template created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`// Home template`);
	});

	test('should create test file', async () => {
		const file = filesystem.find('src/pages/Home', { matching: 'page.test.js' });
		content = filesystem.read(`${src}/page.test.js`);

		expect(output).toContain('Home page tests created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`// Home test`);
	});

	test('should create style file', async () => {
		const file = filesystem.find('src/pages/Home', { matching: 'style.scss' });
		content = filesystem.read(`${src}/style.scss`);

		expect(output).toContain('Home page style created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`.Home {`);
	});
});

describe('new:page named', () => {
	beforeAll(async () => {
		output = await cli(newPageNamed);
		src = 'src/pages/Profile';
	});
	afterAll(() => filesystem.remove('src/pages/'));

	test('should create Profile.jsx', async () => {
		const file = filesystem.find('src/pages/Profile', { matching: 'Profile.jsx' });
		content = filesystem.read(`${src}/Profile.jsx`);

		expect(output).toContain('Profile page template created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`// Profile template`);
	});

	test('should create Profile.test.js', async () => {
		const file = filesystem.find('src/pages/Profile', { matching: 'Profile.test.js' });
		content = filesystem.read(`${src}/Profile.test.js`);

		expect(output).toContain('Profile page tests created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`// Profile test`);
	});

	test('should create style file', async () => {
		const file = filesystem.find('src/pages/Profile', { matching: 'style.scss' });
		content = filesystem.read(`${src}/style.scss`);

		expect(output).toContain('Profile page style created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`.Profile {`);
	});
});