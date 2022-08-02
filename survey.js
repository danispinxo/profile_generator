const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable! ;) `, (name) => {
rl.question(`What's an activity that you like doing? `, (hobbies) => {
rl.question(`What do you listen to while doing that? `, (music) => {
rl.question(`Which meal is your favourite (breakfast, lunch, dinner, etc.)? `, (meal) => {
rl.question(`What's your favourite thing to eat for that meal? `, (food) => {
rl.question(`What sport is your absolute favourite? `, (sport) => {
rl.question(`What's your superpower? In other words, tell us in a few words what you're amazing at! `, (superpower) => {

  console.log(`--------------
  HERE'S A PROFILE DESCRIPTION FOR YOU:
  
Hi! My name is ${name}! In my spare time, I love ${hobbies.toLowerCase()} and listening to ${music}! My favourite meal of the day is ${meal.toLowerCase()}, especially when it's ${food.toLowerCase()}!! My favourite sport is definitely ${sport.toLowerCase()}. My super power is ${superpower.toLowerCase()} and I'm pretty proud of that!`);

rl.close();

});
});   
});
}); 
});
});
});