/*
Hagrid is working as a boat captain for first years going to Hogwarts. 
However, he has become extremely popular amongst the students. 
With so many students wanting to get aboard his boat, he sometimes 
has to face the problem of not enough space left on the boat! He wants 
you to write a simple program telling him if he will be able to fit all the students.

You have to write a function that accepts three parameters:

    cap is the amount of people the boat can hold excluding the Hagrid.
    on is the number of people on the boat excluding the Hagrid.
    wait is the number of people waiting to get on to the boat excluding the Hagrid.

If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
Usage Examples:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

*/


// MY SOLUTION
// export function enough (cap: number, on: number, wait: number): number {
//     if ((cap > on) && (cap >= on + wait)) {
//         return 0;
//     } else {
//         return on + wait - cap;
//     }
// }


// BEST PRACTICE - use ternary operator
export function enough (cap: number, on: number, wait: number): number {
    return (on + wait > cap) ? on + wait - cap : 0
}
