"use strict";
var spreadArgu = function (message) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    console.log(message);
    for (var i in numbers) {
        console.log(numbers[i]);
    }
};
var message = "List of colors";
spreadArgu(message, 1, 2, 3, 4);
spreadArgu(message, 5, 6, 7);
//# sourceMappingURL=spread_operator.js.map