const { system, filesystem } = require('gluegun');

const local = filesystem.path(__dirname, '..');

const cli = async (cmd) =>
	system.run('node ' + filesystem.path(local, 'bin', 'receipt-cli') + ` ${cmd}`);

const newPage = 'new:page Home';
const newPageNamed = 'new:page Profile --named';
const newPageNamedTs = 'new:page Settings --ts';
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

describe('new:page typescript', () => {
	beforeAll(async () => {
		output = await cli(newPageNamedTs);
		src = 'src/pages/Settings';
	});
	afterAll(() => filesystem.remove('src/pages/'));

	test('should create page.tsx', async () => {
		const file = filesystem.find(src, { matching: 'page.tsx' });
		content = filesystem.read(`${src}/page.tsx`);

		expect(output).toContain('Settings page template created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`// Settings template`);
	});

	test('should create page.test.tsx', async () => {
		const file = filesystem.find(src, { matching: 'page.test.tsx' });
		content = filesystem.read(`${src}/page.test.tsx`);

		expect(output).toContain('Settings page tests created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`// Settings test`);
	});

	test('should create types.ts', async () => {
		const file = filesystem.find(src, { matching: 'types.ts' });
		content = filesystem.read(`${src}/types.ts`);

		expect(output).toContain('Settings page types created.');
		expect(file.length).toBe(1);
		expect(content).toContain('');
	});

	test('should create style file', async () => {
		const file = filesystem.find(src, { matching: 'style.scss' });
		content = filesystem.read(`${src}/style.scss`);

		expect(output).toContain('Settings page style created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`.Settings {`);
	});
});
