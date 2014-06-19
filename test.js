'use strict';
var assert = require('assert');
var isPathCwd = require('./');

it('should check if path is cwd', function () {
	assert(isPathCwd(process.cwd()));
	assert(isPathCwd('.'));
	assert(!isPathCwd('foo'));
	assert(!isPathCwd('/'));
	assert(!isPathCwd('..'));
});
