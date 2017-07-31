import test from 'ava';
import m from '.';

test('check if path is cwd', t => {
	t.true(m(process.cwd()));
	t.true(m('.'));
	t.false(m('foo'));
	t.false(m('/'));
	t.false(m('..'));
});
