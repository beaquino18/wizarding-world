import { items } from "./items";


const startPennies = 3;

console.log('Welcome to our Store!');

while (startPennies > 0) {
    console.log(`\nNumber of Pennies in the Jar: ${ startPennies }`);

    const randomItem = Math.floor(Math.random() * items.length);
    const boughtItem = items[randomItem];
}
