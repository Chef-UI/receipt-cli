const { system, filesystem } = require('gluegun');

const src = filesystem.path(__dirname, '..');

const cli = async (cmd) =>
	system.run('node ' + filesystem.path(src, 'bin', 'receipt-cli') + ` ${cmd}`);

const newComponent = 'new:component Topbar';
const newComponentNamed = 'new:component Footer --named';
let output;

describe('new:component', () => {
	beforeAll(async () => {
		output = await cli(newComponent);
	});
	afterAll(() => filesystem.remove('src/components/'));

	test('should create component file', async () => {
		const file = filesystem.find('src/components/Topbar', { matching: 'component.jsx' });

		expect(output).toContain('Topbar component template created.');
		expect(file.length).toBe(1);
	});

	test('should create test file', async () => {
		const file = filesystem.find('src/components/Topbar', { matching: 'component.test.js' });

		expect(output).toContain('Topbar component tests created.');
		expect(file.length).toBe(1);
	});

	test('should create style file', async () => {
		const file = filesystem.find('src/components/Topbar', { matching: 'style.scss' });

		expect(output).toContain('Topbar component style created.');
		expect(file.length).toBe(1);
	});
});

describe('new:component named', () => {
	beforeAll(async () => {
		output = await cli(newComponentNamed);
	});
	afterAll(() => filesystem.remove('src/components/'));

	test('should create Footer.jsx', async () => {
		const file = filesystem.find('src/components/Footer', { matching: 'Footer.jsx' });

		expect(output).toContain('Footer component template created.');
		expect(file.length).toBe(1);
	});

	test('should create Footer.test.js', async () => {
		const file = filesystem.find('src/components/Footer', { matching: 'Footer.test.js' });

		expect(output).toContain('Footer component tests created.');
		expect(file.length).toBe(1);
	});

	test('should create style file', async () => {
		const file = filesystem.find('src/components/Footer', { matching: 'style.scss' });

		expect(output).toContain('Footer component style created.');
		expect(file.length).toBe(1);
	});
});
