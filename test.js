import test from 'ava';
import isPathCwd from '.';

test('main', t => {
	t.true(isPathCwd(process.cwd()));
	t.true(isPathCwd('.'));
	t.false(isPathCwd('foo'));
	t.false(isPathCwd('/'));
	t.false(isPathCwd('..'));
});
