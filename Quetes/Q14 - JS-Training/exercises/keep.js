'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */
function keepFirst(arg) {
    return arg.substring(0, 2);
}

function keepLast(arg) {
    return arg.substring(arg.length-2, arg.length);
}

function keepFirstLast(arg) {
    var arg_first = keepFirst(arg);
    var arg_last = keepLast(arg);
    return arg_first+arg_last;
}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(keepFirst.length, 1)
assert.strictEqual(keepFirst("Hello World"), "He")
assert.strictEqual(typeof keepLast, 'function')
assert.strictEqual(keepLast.length, 1)
assert.strictEqual(keepLast("Hello World"), "ld")
assert.strictEqual(typeof keepFirstLast, 'function')
assert.strictEqual(keepFirstLast.length, 1)
assert.strictEqual(keepFirstLast("Hello World"), "Held")
// End of tests */
