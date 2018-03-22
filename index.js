'use strict';
const path = require('path');

module.exports = input => path.resolve(input) === path.resolve(process.cwd());
