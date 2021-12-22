const { system, filesystem } = require('gluegun');

const local = filesystem.path(__dirname, '..');

const cli = async (cmd) =>
	system.run('node ' + filesystem.path(local, 'bin', 'receipt-cli') + ` ${cmd}`);

const newContainer = 'new:container Box';
const newContainerNamed = 'new:container Modal --named';
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

describe('new:container named', () => {
	beforeAll(async () => {
		output = await cli(newContainerNamed);
	});
	afterAll(() => filesystem.remove('src/containers/'));

	test('should create Modal.jsx', async () => {
		const file = filesystem.find('src/containers/Modal', { matching: 'Modal.jsx' });

		expect(output).toContain('Modal container template created.');
		expect(file.length).toBe(1);
	});

	test('should create Modal.test.js', async () => {
		const file = filesystem.find('src/containers/Modal', { matching: 'Modal.test.js' });

		expect(output).toContain('Modal container tests created.');
		expect(file.length).toBe(1);
	});

	test('should create style file', async () => {
		const file = filesystem.find('src/containers/Modal', { matching: 'style.scss' });

		expect(output).toContain('Modal container style created.');
		expect(file.length).toBe(1);
	});
});