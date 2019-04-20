/**
Check if a path is [CWD](https://en.wikipedia.org/wiki/Working_directory).

@example
```
import isPathCwd = require('is-path-cwd');

isPathCwd(process.cwd());
//=> true

isPathCwd('unicorn');
//=> false
```
*/
declare function isPathCwd(path: string): boolean;

export = isPathCwd;
