'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
// Merci StackOverflow

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof jadenCase, "function")
assert.strictEqual(jadenCase.length, 1)
assert.strictEqual(jadenCase('Voyons voir cela'), 'Voyons Voir Cela')
assert.strictEqual(jadenCase('vOyons voIr cELA'), 'Voyons Voir Cela')
// End of tests */
