# is-path-cwd

> Check if a path is the [current working directory](https://en.wikipedia.org/wiki/Working_directory)

## Install

```sh
npm install is-path-cwd
```

## Usage

```js
import isPathCwd from 'is-path-cwd';

isPathCwd(process.cwd());
//=> true

isPathCwd('unicorn');
//=> false
```
