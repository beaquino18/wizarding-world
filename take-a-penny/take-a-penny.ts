import { items, printItem } from "./items";

let startPennies = 3;

console.log('Welcome to our Store!');

while (startPennies > 0) {
    console.log(`\nNumber of Pennies in the Jar: ${ startPennies }`);

    const randomItem = Math.floor(Math.random() * items.length);
    const boughtItem = items[randomItem];

    printItem(boughtItem);

    const totalPrice = boughtItem.price;

    console.log(`Total price for ${ boughtItem.name }: ${totalPrice.toFixed(2)}`);

    customerAction();
}

function customerAction() {
    const actions = ['take', 'leave']; 
    const action = actions[Math.floor(Math.random() * actions.length)];

    if (action === 'take') {
        startPennies--;
        console.log(`Customer takes a penny. Pennies left: ${startPennies}`);
    } else {
        startPennies++;
        console.log(`Customer leaves a penny. Pennies left: ${startPennies}`);
    }

    if (startPennies === 0) {
        console.log(`\nNo more pennies left in the jar. Thank you for shopping!\n`);
    }
}
