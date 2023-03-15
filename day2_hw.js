//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
}

let favFoodFunc = (person) => {
    console.log("*--Favorite Food Dishes--*");

    console.log("Favorite Pizza:");
     for (let i = 0; i < person.pizza.length; i++) {
        console.log("- " + person.pizza[i]);
    }
  
    console.log("Favorite Tacos:");
    console.log("- " + person.tacos);
  
    console.log("Favorite Burgers:");
    console.log("- " + person.burgers);
  
    console.log("Favorite Ice Cream:");
    for (let i = 0; i < person.ice_cream.length; i++) {
        console.log("- " + person.ice_cream[i]);
    }
  
    console.log("Favorite Shakes:");
    let shakesObj = person.shakes[0];
    for (let place in shakesObj) {
        console.log("- " + shakesObj[place] + " shake from " + place);
  }

    
}

console.log(favFoodFunc(person3))

//=======Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Class
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    // Use an arrow to create the printInfo method
    printInfo = () => {
        console.log(`${this.name} is ${this.age} years old.`)
    }
    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age
    incrementAge = () => {
        this.age++
        console.log(this.age)
    }
}

let person1 = new Person('Kayla', 31)
console.log(person1.printInfo())
console.log(person1.incrementAge())
console.log(person1.incrementAge())
console.log(person1.incrementAge())
let person2 = new Person('John', 30)
console.log(person2.printInfo())

// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/



// ============= Codewars Problems ============//
// =============Exercise #4 ============//
// Create a function that checks if a number n is divisible by two numbers x AND y. 
// All inputs are positive, non-zero numbers.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

let isDivisible = (n, x, y) => {
    if (n % y === 0 && n % x === 0) {
        return true
    } else {
        return false
    }
}

console.log(isDivisible(3, 1, 3))
console.log(isDivisible(12, 2, 6))
console.log(isDivisible(100, 5, 3))
console.log(isDivisible(12, 7, 5))



// =============Exercise #4 ============//
/* There's a "3 for 2" (or "2+1" if you like) offer on mangoes. 
For a given quantity and price (per mango), calculate the total cost 
of the mangoes.
*/

// test.assert_equals(mango(3, 3), 6)
// test.assert_equals(mango(9, 5), 30)

let mango = (quantity, price) => {
    let total = 0;
    let setsOfThree = Math.floor(quantity / 3);
    let remainder = quantity % 3;
  
    // Calculate cost of sets of three mangoes
    total += setsOfThree * 2 * price;
  
    // Calculate cost of remaining mangoes
    total += remainder * price;
  
    return total;
}

console.log(mango(3, 3))
console.log(mango(9, 5))