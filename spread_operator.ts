const spreadArgu = function (message: any, ...numbers: any) {

    console.log(message);
    console.log(numbers);


    for (let i in numbers) {
        console.log(numbers[i])
    }
}

let message = "List of numbers"

let numbersArray = [1, 2, 3, 4]
spreadArgu(message, ...numbersArray)
