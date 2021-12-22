const { system, filesystem } = require('gluegun');
const pjson = require('../package.json');

const src = filesystem.path(__dirname, '..');

const cli = async (cmd) =>
	system.run('node ' + filesystem.path(src, 'bin', 'receipt-cli') + ` ${cmd}`);

test('should return version for --version', async () => {
	const output = await cli('--version');
	expect(output).toContain(pjson.version);
});

test('should return version for -v', async () => {
	const output = await cli('-v');
	expect(output).toContain(pjson.version);
});
