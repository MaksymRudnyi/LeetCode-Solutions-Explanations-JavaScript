/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const braces = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    const len = s.length;

    let result = [];

    for(let i = 0; i < len; i++) {
        if (s[i] === braces[result[result.length - 1]]) {
            result.pop()
        } else {
            result.push(s[i])
        }
    }

    return !result.length;
}