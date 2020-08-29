# DEPD
*A lightweight deprecation module for Deno*!

Depd is inspired by a [Node.js module named Depd](https://www.npmjs.com/package/depd).

## Usage
```ts
import depd from 'https://deno.land/x/depd@1.0.0';

// Create the initial deprecator:
const deprecated = depd('package-name');

// Deprecate a function:
const func = deprecated(function func() {
    console.log('Hello, world!');
});

func();

//=> [WARNING] Package package-name deprecated 'func()'.
```

**If you want to throw an error instead of displaying a warning:**
```ts
import depd from 'https://deno.land/x/depd@1.0.0';

// Create the initial deprecator:
const deprecated = depd('package-name', {
    error: true // Use configuration
});

// Deprecate a function:
const func = deprecated(function func() {
    console.log('Hello, world!');
});

func();

//=> Error: Package package-name deprecated 'func()'.
```