// Question 26

let alien_color: string = 'green';

// Version that runs the if block
if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
  console.log("Congratulations! You just earned 10 points for shooting the alien.");
}

// Version that runs the else block
alien_color = 'red';

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
  console.log("Congratulations! You just earned 10 points for shooting the alien.");
}