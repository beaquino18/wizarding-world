// import PromptSync from "prompt-sync";
// const prompt = PromptSync();


// function welcomeMessage(name: string) {
//     console.log(`Welcome to Wizarding World ${ name }`)
// };

// const getInput = () => {
//     const value = prompt('Enter your name: ');
//     return value;
// }


// welcomeMessage(getInput());

// -----------------

// array list of variables and different way use cases
// const collectionA: string[] = [];
// const collectionB: Array<string> = [];


// collectionA.push('Luna')
// collectionA.push('Harry', 'Hermione', 'Ron');

// console.log(collectionA);

// //printing the index of array start with 0
// console.log(collectionA[0]);

// // length of array
// console.log(collectionA.length);

// console.log(collectionA[collectionA.length - 1]);

// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.forEach((value) => {
//     console.log(value);
// });

// const doubleNumbers = numbers.map((value) => {
//     return value * 2;
// });

// console.log(doubleNumbers);


// ----------------------------------

// array = list 
// object = collection of things but it's a single variable that has little sub objects
// objects has keys and values

const wizard = {
    name: 'Harry',
    wand: 'Phoenix',
    house: 'Gryffindor',
    year: 1,
};

// you can call each of the values
console.log(wizard);
console.log(wizard.name);
console.log(wizard.wand);
console.log(wizard.house);
console.log(wizard.year);

interface Wizard {
    name: string,
    wand: string,
    house: string,
    year: number
}

const wizardDraco: Wizard = {
    name: 'Draco',
    wand: 'Hawthorn',
    house: 'Slytherin',
    year: 1,
}

const wizardGeorge: Wizard = {
    name: 'Fred',
    wand: 'Pine',
    house: 'Gryffindor',
    year: 3,
}

console.log(wizardDraco);
console.log(wizardGeorge);
