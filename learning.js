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

//LoveMatch Calculator

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

let guests = ["muyi", "tobi", "espeon"]
let name = prompt("what is your name")
if (guests.includes(name)) {
    alert("you are invited")
}
else {
    alert("you are not invited")
}