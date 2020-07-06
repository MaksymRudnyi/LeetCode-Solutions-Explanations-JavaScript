/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || ((x % 10 == 0) && x !== 0)) {
        return false
    }

    let revert = 0;

    for (let i = x; i; i = Math.trunc(i / 10)) {
        revert = revert * 10 + i % 10
    }

    return revert == x
};