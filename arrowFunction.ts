
const arrowFunction = {
    id: 1,
    myFun: function () {
        setTimeout(() => { console.log(this.id); }, 1000)

    }
}

arrowFunction.myFun()