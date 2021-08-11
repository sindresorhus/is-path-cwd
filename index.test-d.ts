import {expectType} from 'tsd';
import isPathCwd from './index.js';

expectType<boolean>(isPathCwd('unicorn'));
