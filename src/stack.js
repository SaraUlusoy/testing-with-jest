
const _ = require('underscore');

let stack = [];

// Lägger ett element överst i stacken
exports.push = function (x) {
    stack.push(x);
};

// Returnerar det översta elementet i stacken och tar bort det
// Returnerar 'undefined' om stacken är tom
exports.pop = function () {
    if (stack.length === 0) {
        return undefined;
    }
    return stack.pop();
};

// Returnerar det översta elementet i stacken
exports.peek = function () {
    return _.last(stack);
}



