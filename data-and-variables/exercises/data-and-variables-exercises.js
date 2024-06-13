// Declare and assign the variables below
let name = "Determination";
let speed = 17500;
let Mars= 225000000;
let Moon = 384400;
let mpk = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof name);
console.log(typeof speed);
console.log(typeof Mars);
console.log(typeof Moon);
console.log(typeof mpk);

// Calculate a space mission below
let milesToMars = Mars * mpk;
let hoursToMars = milesToMars / speed
let daysToMars = hoursToMars / 24
// Print the results of the space mission calculations below
console.log(name , 'will take', daysToMars, 'days to reach Mars.')
// Calculate a trip to the moon below
let milesToMoon = Moon * mpk;
let hoursToMoon = milesToMoon / speed
let daysToMoon = hoursToMoon / 24
// Print the results of the trip to the moon below
console.log(name , 'will take', daysToMoon, 'days to reach the Moon.')