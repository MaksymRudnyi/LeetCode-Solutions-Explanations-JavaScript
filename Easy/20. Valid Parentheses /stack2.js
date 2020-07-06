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
    let top = '';

    let result = [];

    for(let i = 0; i < len; i++) {
        if (braces[s[i]]) {
            result.push(s[i])
        } else {
            if (result.length === 0) {
                return false
            } else {
                top = result.pop();

                if (braces[top] !== s[i]) {
                    return false
                }
            }

        }
    }

    return !result.length;
}