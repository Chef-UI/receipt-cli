const { system, filesystem } = require('gluegun');

const local = filesystem.path(__dirname, '..');

const cli = async (cmd) =>
	system.run('node ' + filesystem.path(local, 'bin', 'receipt-cli') + ` ${cmd}`);

const newComponent = 'new:component Topbar';
const newComponentNamed = 'new:component Footer --named';
const newComponentTypescript = 'new:component Topbar --ts';
let output;
let src;
let content;

describe('new:component', () => {
	beforeAll(async () => {
		output = await cli(newComponent);
		src = 'src/components/Topbar';
	});
	afterAll(() => filesystem.remove('src/components/'));

	test('should create component file', async () => {
		const file = filesystem.find(src, { matching: 'component.jsx' });
		content = filesystem.read(`${src}/component.jsx`);

		expect(output).toContain('Topbar component template created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`// Topbar template`);
	});

	test('should create test file', async () => {
		const file = filesystem.find(src, { matching: 'component.test.js' });
		content = filesystem.read(`${src}/component.test.js`);

		expect(output).toContain('Topbar component tests created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`// Topbar test`);
	});

	test('should create style file', async () => {
		const file = filesystem.find(src, { matching: 'style.scss' });
		content = filesystem.read(`${src}/style.scss`);

		expect(output).toContain('Topbar component style created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`.Topbar {`);
	});
});

describe('new:component named', () => {
	beforeAll(async () => {
		output = await cli(newComponentNamed);
		src = 'src/components/Footer';
	});
	afterAll(() => filesystem.remove('src/components/'));

	test('should create Footer.jsx', async () => {
		const file = filesystem.find(src, { matching: 'Footer.jsx' });
		content = filesystem.read(`${src}/Footer.jsx`);

		expect(output).toContain('Footer component template created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`// Footer template`);
	});

	test('should create Footer.test.js', async () => {
		const file = filesystem.find(src, { matching: 'Footer.test.js' });
		content = filesystem.read(`${src}/Footer.test.js`);

		expect(output).toContain('Footer component tests created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`// Footer test`);
	});

	test('should create style file', async () => {
		const file = filesystem.find(src, { matching: 'style.scss' });
		content = filesystem.read(`${src}/style.scss`);

		expect(output).toContain('Footer component style created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`.Footer {`);
	});
});

describe('new:component typescript', () => {
	beforeAll(async () => {
		output = await cli(newComponentTypescript);
		src = 'src/components/Link';
	});
	afterAll(() => filesystem.remove('src/components/'));

	test('should create Link.tsx', async () => {
		const file = filesystem.find(src, { matching: 'Link.tsx' });
		content = filesystem.read(`${src}/Link.tsx`);

		expect(output).toContain('Link component template created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`// Link template`);
	});

	test('should create Link.test.tsx', async () => {
		const file = filesystem.find(src, { matching: 'Link.test.txs' });
		content = filesystem.read(`${src}/Link.test.tsx`);

		expect(output).toContain('Link component tests created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`// Link test`);
	});

	test('should create types.ts', async () => {
		const file = filesystem.find(src, { matching: 'types.ts' });
		content = filesystem.read(`${src}/types.ts`);

		expect(output).toContain('Link component types created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`// Link types`);
	});

	test('should create style file', async () => {
		const file = filesystem.find(src, { matching: 'style.scss' });
		content = filesystem.read(`${src}/style.scss`);

		expect(output).toContain('Link component style created.');
		expect(file.length).toBe(1);
		expect(content).toContain(`.Link {`);
	});
});