import test from 'ava';
import isPathCwd from '.';

const processCwd = process.cwd;
const cwd = process.cwd();

test('main', t => {
	t.true(isPathCwd(cwd));
	t.true(isPathCwd('.'));
	t.false(isPathCwd('foo'));
	t.false(isPathCwd('/'));
	t.false(isPathCwd('..'));

	process.cwd = () => cwd.toLowerCase();
	t.false(isPathCwd(cwd.toUpperCase()));
	process.cwd = processCwd;
});

test('win32', t => {
	const processPlatform = process.platform;
	Object.defineProperty(process, 'platform', {value: 'win32'});

	process.cwd = () => cwd.toLowerCase();
	t.true(isPathCwd(cwd.toUpperCase()));
	process.cwd = processCwd;

	Object.defineProperty(process, 'platform', {value: processPlatform});
});
