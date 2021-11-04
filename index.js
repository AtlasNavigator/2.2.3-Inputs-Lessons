// Tells program to get code from this other file, in this case, readline-sync
const readLine = require('readline-sync');
let answer = readLine.question("What... what time is it?\nThe time is: "); //The question 
console.log(answer); //The answer, it has to be on the same line
// The \n can be used to go to a new line and you can add text to prompt an answer

let username = readLine.question('Enter Username: ');
let password = readLine.question('Enter Password: ');
if (password == "fuckyounsa"){
  console.log(`Welcome ${username}`);
} else {
  console.log("Incorrect password, please try again.");
} //You can use such things to make a simple login script