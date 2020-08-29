import depd from './mod.ts';

let deprecated = depd('depd', {
    error: false
});

let f = deprecated(function test() {
    console.log('Hello, world!');
});

f();