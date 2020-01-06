"use strict";
var anotherfun = function () { return .1; };
console.log(anotherfun());
var myfunction = function (value, bonus) {
    if (value === void 0) { value = 20; }
    if (bonus === void 0) { bonus = 5 * anotherfun(); }
    console.log(value + bonus);
    console.log(arguments, length);
};
myfunction(40, 40);
//# sourceMappingURL=default_parameter.js.map