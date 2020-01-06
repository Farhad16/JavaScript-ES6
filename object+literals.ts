// One type of object define 
let firstname = "Farhad";
let lastname = "Hossain";

let person = {
    firstname,
    lastname
};

//use in function 

let showname = function (firstname: any, lastname: any, age: any) {
    let fullname = firstname + " " + lastname;
    return {
        fullname,
        isage() {
            if (age > 22) {
                return "You are at the age of marriage"
            }
            else {
                return "You are not perfect for marriage"
            }
        }
    }
}

console.log(person.firstname);
let p = showname("Tahmina", "Afrin", 24);
console.log(p.fullname);
console.log(p.isage());

// Another type of object define 


