/**
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... 
but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). 
Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. 
If bonus is false, the fatcat did not make enough money and must receive only his stated salary. 

 */


export class Kata {
    public static bonusTime(salary:number, bonus:boolean) {
      if (bonus === true) {
        console.log(`£ ${salary * 10}`);
      } else {
        console.log(`£ ${salary}`);
      }
    }

    public static bonusTimeSolution(salary: number, bonus:boolean) {
      return `£ ${salary * (bonus ? 10 : 1)}`;
    }
}



Kata.bonusTime(10000, true);

console.log(Kata.bonusTimeSolution(10000, true));
