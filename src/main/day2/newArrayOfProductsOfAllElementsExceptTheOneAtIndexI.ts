/*
This problem was asked by Uber.

Given an array of integers, return a new array such that each element at
index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

export function productsOfAllElementsExceptTheOneAtIndexIUsingDivision(numbers: number[]): number[] {
    if (numbers.length <= 2) {
        return [];
    }

    const totalProduct = numbers.reduce((acc, i) => acc * i);
    return numbers.map((i) => totalProduct / i);
}

export function productsOfAllElementsExceptTheOneAtIndexIWithoutDivision(numbers: number[]): number[] {
    if (numbers.length <= 2) {
        return [];
    }

    return numbers.map((item, index) => {
        const productOfElementsBeforeIndex = numbers.slice(0, index).reduce(
            (accumulator, currentValue) => accumulator * currentValue
            , 1);

        const productOfElementsAfterIndex = numbers.slice(index + 1).reduce(
            (accumulator, currentValue) => accumulator * currentValue
            , 1);

        return productOfElementsBeforeIndex * productOfElementsAfterIndex;
    });
}
