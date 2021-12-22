const { system, filesystem } = require('gluegun');

const src = filesystem.path(__dirname, '..');

const cli = async (cmd) =>
	system.run('node ' + filesystem.path(src, 'bin', 'receipt-cli') + ` ${cmd}`);

const newContainer = 'new:container Box';
let output;

describe('new:container', () => {
	beforeAll(async () => {
		output = await cli(newContainer);
	});
	afterAll(() => filesystem.remove('src/containers/'));

	test('should create container file', async () => {
		const file = filesystem.find('src/containers/Box', { matching: 'container.jsx' });

		expect(output).toContain('Box container template created.');
		expect(file.length).toBe(1);
	});

	test('should create test file', async () => {
		const file = filesystem.find('src/containers/Box', { matching: 'container.test.js' });

		expect(output).toContain('Box container tests created.');
		expect(file.length).toBe(1);
	});

	test('should create style file', async () => {
		const file = filesystem.find('src/containers/Box', { matching: 'style.scss' });

		expect(output).toContain('Box container style created.');
		expect(file.length).toBe(1);
	});
});
