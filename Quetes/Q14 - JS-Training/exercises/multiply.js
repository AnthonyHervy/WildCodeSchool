'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code :
function multiply(arg1, arg2){
    var i = 0;
    var total = 0;
    if (arg1 === 0 || arg2 ===0){
        return 0;
    }
    else if (arg1 > 0){
        while (i < arg1){
            total += arg2;
            i++;
        }
        return total;
        }
    else if (arg2 > 0){
        while (i < arg2){
            total += arg1;
            i++;
        }
        return total;
    }
    else{
        while (i < Math.abs(arg1)){
            total += Math.abs(arg2);
            i++
        }
        return Math.abs(total);
    }    
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
