export class Kata {
    public static bonusTime(salary:number, bonus:boolean):string {
      if (bonus === true) {
        console.log(`£ ${salary * 10}`);
      } else {
        console.log(`£ ${salary}`);
      }
    }
}

Kata.bonusTime(10000, true);
