import {expectType} from 'tsd';
import isPathCwd = require('.');

expectType<boolean>(isPathCwd('unicorn'));
