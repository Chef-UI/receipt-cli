const { system, filesystem } = require('gluegun');

const local = filesystem.path(__dirname, '..');

const cli = async (cmd) =>
	system.run('node ' + filesystem.path(local, 'bin', 'receipt-cli') + ` ${cmd}`);

const newComponent = 'new:component Topbar';
const newComponentNamed = 'new:component Footer --named';
let output;

describe('new:component', () => {
	beforeAll(async () => {
		output = await cli(newComponent);
	});
	afterAll(() => filesystem.remove('src/components/'));

	test('should create component file', async () => {
		const src = 'src/components/Topbar';
		const file = filesystem.find(src, { matching: 'component.jsx' });
		const content = filesystem.read(`${src}/component.jsx`);

		expect(output).toContain('Topbar component template created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`// Topbar template`);
	});

	test('should create test file', async () => {
		const src = 'src/components/Topbar';
		const file = filesystem.find(src, { matching: 'component.test.js' });
		const content = filesystem.read(`${src}/component.test.js`);

		expect(output).toContain('Topbar component tests created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`// Topbar test`);
	});

	test('should create style file', async () => {
		const src = 'src/components/Topbar';
		const file = filesystem.find(src, { matching: 'style.scss' });
		const content = filesystem.read(`${src}/style.scss`);

		expect(output).toContain('Topbar component style created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`.Topbar {`);
	});
});

describe('new:component named', () => {
	beforeAll(async () => {
		output = await cli(newComponentNamed);
	});
	afterAll(() => filesystem.remove('src/components/'));

	test('should create Footer.jsx', async () => {
		const src = 'src/components/Footer';
		const file = filesystem.find(src, { matching: 'Footer.jsx' });
		const content = filesystem.read(`${src}/Footer.jsx`);

		expect(output).toContain('Footer component template created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`// Footer template`);
	});

	test('should create Footer.test.js', async () => {
		const src = 'src/components/Footer';
		const file = filesystem.find(src, { matching: 'Footer.test.js' });
		const content = filesystem.read(`${src}/Footer.test.js`);

		expect(output).toContain('Footer component tests created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`// Footer test`);
	});

	test('should create style file', async () => {
		const src = 'src/components/Footer';
		const file = filesystem.find(src, { matching: 'style.scss' });
		const content = filesystem.read(`${src}/style.scss`);

		expect(output).toContain('Footer component style created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`.Footer {`);
	});
});
