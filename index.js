'use strict';
const path = require('path');

module.exports = str => path.resolve(str) === path.resolve(process.cwd());
