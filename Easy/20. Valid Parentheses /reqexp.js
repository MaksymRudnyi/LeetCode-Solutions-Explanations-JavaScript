/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let expr = s.replace(/[^\[\]\{\}\(\)]/g,''),
        before;

    do {
        before = expr;
        expr = expr.replace(/\[\]|\{\}|\(\)/g,'');
    } while (before != expr);

    return !expr;
}