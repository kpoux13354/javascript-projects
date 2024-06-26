let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split()); console.log(str.split('e'));//removes what's inside the parenthesis
//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join()); console.log(arr.join('a')); console.log(arr.join(' '));console.log(arr.join(''));// inside the paranthesis goes between each element, commas are removed
//3) Do split or join change the original string/array?
//Only when there's a parameter inside the parenthesis
//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
cargoHold = cargoHold.split(','); console.log(cargoHold.sort()); console.log(cargoHold.join(','));