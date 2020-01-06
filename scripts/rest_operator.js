"use strict";
var getArguments = function (message) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(numbers);
    for (var i in numbers) {
        console.log(numbers[i]);
    }
};
var msg = "List of colors";
getArguments(msg, "red", "blue");
getArguments(msg, "red", "blue", "green");
//# sourceMappingURL=rest_operator.js.map