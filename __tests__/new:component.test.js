const { system, filesystem } = require('gluegun');

const src = filesystem.path(__dirname, '..');

const cli = async (cmd) =>
	system.run('node ' + filesystem.path(src, 'bin', 'receipt-cli') + ` ${cmd}`);

const newComponent = 'new:component Topbar';
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
