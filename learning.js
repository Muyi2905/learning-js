//Bmi Calculator
//Function
function BMI() {
    var weight = prompt("what do you weigh")
    var height = prompt("what is your height")
    // var mass=prompt("what is your mass")
    var heightsqr = height * height
    var BMI = weight / heightsqr
    alert("your BMI is " + BMI)
}
BMI();


//Conditionals
//if statement
let Name = prompt("enter your name")
if (Name === muyiwa) {
    alert("you are right")
}
//else statement
else {
    alert("wrong")
}

//LoveMatch Calculator
//learning math for js

var name1 = prompt(" enter your name")
var name2 = prompt("enter your crush name")
var lovescore = Math.random() * 100
lovescore = Math.floor(lovescore)
alert("your love match is " + lovescore + "%")
if (lovescore > 60) {
    alert("you love each other like kanye loves himself")
}
else {
    alert("not compatible")
}

//Array
//including objects in array

let guests = ["muyi", "tobi", "espeon"]
let name = prompt("what is your name")
if (guests.includes(name)) {
    alert("you are invited")
}
else {
    alert("you are not invited")
}

//Fizzbuzz array challenge
let x = [];
function fizzBuzz() {
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            x.push("Fizz");
        }
        else if (i % 3 !== 0 && i % 5 === 0) {
            x.push("Buzz");
        }
        else if (i % 3 === 0 && i % 5 === 0)
            x.push("FizzBuzz");
    }
        else {
        x.push(i);

    }
}
return x;


console.log(fizzBuzz());

//randomizing array

function whoIsPaying(names) {

    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var payingPerson = names[randomPersonPosition];
    return payingPerson;
}

console.log(whoIsPaying(["muyi", "bob", "darsh", "raj"]));


//for loop 
//return until its false
for (let i = 1; i < 6; i++) {
    console.log(muyiwa);
    if (i === 4) break;
}

//while loop
let i = 0
while (i < 10) {
    console.log(i);
    i++
}

//do loop
//it works like the while statement but the difference is that it checks for the condition after the do statement has run