var text = "Wonderful Joyful Happiness Time Task Apple"; 

let regex = /\b[^aA\s]{6,}/g;


console.log(text.match(regex)); 

process.stdin.read();