'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */
function cutFirst(arg) {
    return arg.substring(2, arg.length);
}

function cutLast(arg) {
    return arg.substring(0, arg.length-2);
}

function cutFirstLast(arg) {
    return cutFirst(cutLast(arg));
}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(cutFirst.length, 1)
assert.strictEqual(cutFirst("Hello World"), "llo World")
assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(cutLast.length, 1)
assert.strictEqual(cutLast("Hello World"), "Hello Wor")
assert.strictEqual(typeof cutFirstLast, 'function')
assert.strictEqual(cutFirstLast.length, 1)
assert.strictEqual(cutFirstLast("Hello World"), "llo Wor")

// End of tests */
