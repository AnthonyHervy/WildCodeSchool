'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */
function whisper(arg){
    return arg.toLowerCase();
}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper.length, 1)
assert.strictEqual(whisper("SALUT"), "salut")
// End of tests */
