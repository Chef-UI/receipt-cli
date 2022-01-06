const { system, filesystem } = require('gluegun');

const local = filesystem.path(__dirname, '..');

const cli = async (cmd) =>
	system.run('node ' + filesystem.path(local, 'bin', 'receipt-cli') + ` ${cmd}`);

const newContainer = 'new:container Box';
const newContainerNamed = 'new:container Modal --named';
const newContainerNamedTs = 'new:container Footer --ts';
let output;
let src;
let content;

describe('new:container', () => {
	beforeAll(async () => {
		output = await cli(newContainer);
		src = 'src/containers/Box';
	});
	afterAll(() => filesystem.remove('src/containers/'));

	test('should create container file', async () => {
		const file = filesystem.find(src, { matching: 'container.jsx' });
		content = filesystem.read(`${src}/container.jsx`);

		expect(output).toContain('Box container template created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`// Box template`);
	});

	test('should create test file', async () => {
		const file = filesystem.find(src, { matching: 'container.test.js' });
		content = filesystem.read(`${src}/container.test.js`);

		expect(output).toContain('Box container tests created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`// Box test`);
	});

	test('should create style file', async () => {
		const file = filesystem.find(src, { matching: 'style.scss' });
		content = filesystem.read(`${src}/style.scss`);

		expect(output).toContain('Box container style created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`.Box {`);
	});
});

describe('new:container named', () => {
	beforeAll(async () => {
		output = await cli(newContainerNamed);
		src = 'src/containers/Modal';
	});
	afterAll(() => filesystem.remove('src/containers/'));

	test('should create Modal.jsx', async () => {
		const file = filesystem.find('src/containers/Modal', { matching: 'Modal.jsx' });
		content = filesystem.read(`${src}/Modal.jsx`);

		expect(output).toContain('Modal container template created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`// Modal template`);
	});

	test('should create Modal.test.js', async () => {
		const file = filesystem.find('src/containers/Modal', { matching: 'Modal.test.js' });
		content = filesystem.read(`${src}/Modal.test.js`);

		expect(output).toContain('Modal container tests created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`// Modal test`);
	});

	test('should create style file', async () => {
		const file = filesystem.find('src/containers/Modal', { matching: 'style.scss' });
		content = filesystem.read(`${src}/style.scss`);

		expect(output).toContain('Modal container style created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`.Modal {`);
	});
});

describe('new:container typescript', () => {
	beforeAll(async () => {
		output = await cli(newContainerNamedTs);
		src = 'src/containers/Footer';
	});
	afterAll(() => filesystem.remove('src/containers/'));

	test('should create container.tsx', async () => {
		const file = filesystem.find(src, { matching: 'container.tsx' });
		content = filesystem.read(`${src}/container.tsx`);

		expect(output).toContain('Footer container template created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`// Footer template`);
	});

	test('should create container.test.tsx', async () => {
		const file = filesystem.find(src, { matching: 'container.test.tsx' });
		content = filesystem.read(`${src}/container.test.tsx`);

		expect(output).toContain('Footer container tests created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`// Footer test`);
	});

	test('should create types.ts', async () => {
		const file = filesystem.find(src, { matching: 'types.ts' });
		content = filesystem.read(`${src}/types.ts`);

		expect(output).toContain('Footer container types created.');
		expect(file.length).toBe(1);
		expect(content).toContain('');
	});

	test('should create style file', async () => {
		const file = filesystem.find(src, { matching: 'style.scss' });
		content = filesystem.read(`${src}/style.scss`);

		expect(output).toContain('Footer container style created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`.Footer {`);
	});
});
