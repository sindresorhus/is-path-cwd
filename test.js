import process from 'node:process';
import test from 'ava';
import isPathCwd from './index.js';

const cwd = process.cwd();
const isWindow = process.platform === 'win32';
const reversedCaseCwd = [...cwd].map(
	character => character[character.toLowerCase() === character ? 'toUpperCase' : 'toLowerCase'](),
).join('');

test('main', t => {
	t.true(isPathCwd(cwd));
	t.true(isPathCwd('.'));
	t.false(isPathCwd('foo'));
	t.false(isPathCwd('/'));
	t.false(isPathCwd('..'));

	if (!isWindow && cwd !== reversedCaseCwd) {
		t.false(isPathCwd(reversedCaseCwd));
	}
});

if (isWindow && cwd !== reversedCaseCwd) {
	test('win32', t => {
		t.true(isPathCwd(cwd.toUpperCase()));
		t.true(isPathCwd(cwd.toLowerCase()));
		t.true(isPathCwd(reversedCaseCwd));
	});
}
