const anotherfun = () => .1;
console.log(anotherfun())
const myfunction = function (value = 20, bonus = 5 * anotherfun()) {
    console.log(value + bonus)
    console.log(arguments, length)
}
myfunction(40, 40)
