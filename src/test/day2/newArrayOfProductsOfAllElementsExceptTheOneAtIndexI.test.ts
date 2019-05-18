import {
    productsOfAllElementsExceptTheOneAtIndexIUsingDivision,
    productsOfAllElementsExceptTheOneAtIndexIWithoutDivision,
} from "../../main/day2/newArrayOfProductsOfAllElementsExceptTheOneAtIndexI";

describe("findTwoNumbersAddUpToK", () => {
    it("should return an empty list for an empty list", () => {
        expect(productsOfAllElementsExceptTheOneAtIndexIUsingDivision([])).toEqual([]);

        expect(productsOfAllElementsExceptTheOneAtIndexIWithoutDivision([])).toEqual([]);
    });

    it("should return an empty list for one-element list", () => {
        expect(productsOfAllElementsExceptTheOneAtIndexIUsingDivision([1])).toEqual([]);
        expect(productsOfAllElementsExceptTheOneAtIndexIUsingDivision([aRandomInt()])).toEqual([]);

        expect(productsOfAllElementsExceptTheOneAtIndexIWithoutDivision([1])).toEqual([]);
        expect(productsOfAllElementsExceptTheOneAtIndexIWithoutDivision([aRandomInt()])).toEqual([]);
    });

    it("should return an empty list for two-element list", () => {
        expect(productsOfAllElementsExceptTheOneAtIndexIUsingDivision([aRandomInt(), aRandomInt()])).toEqual([]);

        expect(productsOfAllElementsExceptTheOneAtIndexIWithoutDivision([aRandomInt(), aRandomInt()])).toEqual([]);
    });

    it("should work for 3 element list", () => {
        expect(productsOfAllElementsExceptTheOneAtIndexIUsingDivision([1, 2, 3])).toEqual([6, 3, 2]);

        expect(productsOfAllElementsExceptTheOneAtIndexIWithoutDivision([1, 2, 3])).toEqual([6, 3, 2]);
    });

    // tslint:disable-next-line:max-line-length
    it("should return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i - for sample data", () => {
        expect(productsOfAllElementsExceptTheOneAtIndexIUsingDivision([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
        expect(productsOfAllElementsExceptTheOneAtIndexIUsingDivision([3, 2, 1])).toEqual([2, 3, 6]);

        expect(productsOfAllElementsExceptTheOneAtIndexIWithoutDivision([1, 2, 3, 4, 5]))
            .toEqual([120, 60, 40, 30, 24]);
        expect(productsOfAllElementsExceptTheOneAtIndexIWithoutDivision([3, 2, 1])).toEqual([2, 3, 6]);
    });

    function aRandomInt() {
        return getRandomInt(0, 99999);
    }

    function getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
