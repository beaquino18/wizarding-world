/**
 Write a function that accepts an array of 10 integers (between 0 and 9), 
 that returns a string of those numbers in the form of a phone number.
 
 Example:
 
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!

 */


export function createPhoneNumber(numbers: number[]): string {
    const firstThree = `(${numbers[0]}${numbers[1]}${numbers[2]})`;
    const secondThree = `${numbers[3]}${numbers[4]}${numbers[5]}`
    const lastThree = `${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
    return `${firstThree} ${secondThree}-${lastThree}`
  }


// BETTER
export function createPhoneNumberSolution(numbers: number[]): string {
    let phoneNumber: string = "(xxx) xxx-xxxx"

    for (let i = 0; i < numbers.length; i++)
        phoneNumber = phoneNumber.replace("x", numbers[i].toString());

    return phoneNumber;
  }




console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumberSolution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
