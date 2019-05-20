import {
    findTheLowestPositiveIntegerThatDoesNotExistInTheArray,
} from "../../main/day4/findTheLowestPositiveIntegerThatDoesNotExistInTheArray";

describe("findTheLowestPositiveIntegerThatDoesNotExistInTheArray", () => {
    it("should return an empty list for an empty list", () => {
        expect(findTheLowestPositiveIntegerThatDoesNotExistInTheArray([])).toEqual(1);
    });

    it("should give 1 as the lowest int for a list which has 2 at its lowest positive int", () => {
        expect(findTheLowestPositiveIntegerThatDoesNotExistInTheArray([2])).toEqual(1);
    });

    it("should give 2 as the lowest int for a list which has 1 at its lowest positive int", () => {
        expect(findTheLowestPositiveIntegerThatDoesNotExistInTheArray([1])).toEqual(2);
    });

    it("should work for more complex cases", () => {
        expect(findTheLowestPositiveIntegerThatDoesNotExistInTheArray([1, 2, 6, 7])).toEqual(3);
        expect(findTheLowestPositiveIntegerThatDoesNotExistInTheArray([1, 2, 3, 7])).toEqual(4);
        expect(findTheLowestPositiveIntegerThatDoesNotExistInTheArray([1, 2, 3, 4, 5, 6, 7])).toEqual(8);
        expect(findTheLowestPositiveIntegerThatDoesNotExistInTheArray([2, 3, 4, 5, 6, 7])).toEqual(1);
        expect(findTheLowestPositiveIntegerThatDoesNotExistInTheArray([2, 3, 4, 7])).toEqual(1);
    });

    it("should return 1 for list has no positive values", () => {
        expect(findTheLowestPositiveIntegerThatDoesNotExistInTheArray([-1])).toEqual(1);
        expect(findTheLowestPositiveIntegerThatDoesNotExistInTheArray([0])).toEqual(1);
        expect(findTheLowestPositiveIntegerThatDoesNotExistInTheArray([0, 0, -10, 0, -99])).toEqual(1);
        expect(findTheLowestPositiveIntegerThatDoesNotExistInTheArray([-1, -1])).toEqual(1);
    });

    it("should work for sample test data", () => {
        expect(findTheLowestPositiveIntegerThatDoesNotExistInTheArray([3, 4, -1, 1])).toEqual(2);
        expect(findTheLowestPositiveIntegerThatDoesNotExistInTheArray([1, 2, 0])).toEqual(3);
    });
});
