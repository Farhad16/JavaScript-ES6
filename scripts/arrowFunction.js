"use strict";
var arrowFunction = {
    id: 1,
    myFun: function () {
        var _this = this;
        setTimeout(function () { console.log(_this.id); }, 1000);
    }
};
arrowFunction.myFun();
//# sourceMappingURL=arrowFunction.js.map