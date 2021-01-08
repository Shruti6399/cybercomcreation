var name1 = prompt("what is your name");
console.log(name1);
var weight1 = prompt("what is your weight");
console.log(weight1);
var height1 = prompt("what is your height");
console.log(height1);
var bmi1 = weight1/(height1 * height1);
console.log(bmi1);

var name2 = prompt("what is your name");
console.log(name2);
var weight2 = prompt("what is your weight");
console.log(weight2);
var height2 = prompt("what is your height");
console.log(height2);
var bmi2 = weight2/(height2 * height2);
console.log(bmi2);

if (bmi1>bmi2) {
    console.log('mark has more bodyfat');
    
} else {
    console.log('john has more bodyfat');
    
}