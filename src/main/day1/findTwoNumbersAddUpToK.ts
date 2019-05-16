/*
This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/

export function findTwoNumbersAddUpToK(numbers: number[], k: number): boolean {
    for (const {item, index} of numbers.map((item, index) => ({item, index}))) {
       if (numbers.slice(index + 1).some((i) => i + item === k)) {
           return true;
       }
    }
    return false;
}
