const getArguments = function (message: any, ...numbers: any) {

    console.log(message);
    console.log(numbers);


    for (let i in numbers) {
        console.log(numbers[i])
    }
}

let msg = "List of colors"

getArguments(msg, "red", "blue")
getArguments(msg, "red", "blue", "green")