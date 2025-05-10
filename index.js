import process from 'node:process';
import nodePath from 'node:path';

const isPathCwd = path => !nodePath.relative(path, process.cwd());

export default isPathCwd;
