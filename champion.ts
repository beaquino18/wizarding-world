/**
 * function that takes a list of 10 matches and returns the total points in championship
 * each match is represented by string "x:y", x is team's score, y opponents score
 * if win (x>y), 3 points
 * if lose (x<y), 0 points
 * if tie, (x=y), 1 point
 * 
 * range of number for x and y is 0 - 4
 * 
 * 
 */

// export function points(games : string[]) {
//         let results = games.map((x) => x.split(':').map(Number));
//         let count = 0;
        
//         results.forEach((element) => {

//             if(element[0] > element[1]) {
//                 count++;
//             } else if (element[0] < element[1]) {
//                 count = 0;
//             } else {
//                 count++
//             }
//         });
        
// }

  
console.log(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']));


// solution

export function points(games: string[]): number {
    let totalPoints = 0;

    games.forEach((game) => {
        const [scoreA, scoreB] = game.split(':').map(Number);
        
        if (scoreA > scoreB) {
            totalPoints += 3; // Win
        } else if (scoreA === scoreB) {
            totalPoints += 1; // Draw
        }
        // No need for an else block; losses give 0 points.
    });

    return totalPoints; // Return the total points
}

console.log(points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']));

