//Write a program to tell if someone is shouting (typing in all caps),
//whispering (typing in all lowercase), or neither. Use prompt to get user input, and
//then console log whether the user was shouting, whispering, or talking normally.

var userText = prompt("Write a sentence here.");

if (userText.toUpperCase() === userText) {
  console.log("The user is shouting.");
} else if (userText.toLowerCase() === userText) {
  console.log("The user is whispering.");
} else {
  console.log("This user is speaking normally ");
}
