import {
    findTheLowestPositiveIntegerThatDoesNotExistInTheArray,
} from "../../main/day4/findTheLowestPositiveIntegerThatDoesNotExistInTheArray";

describe("findTheLowestPositiveIntegerThatDoesNotExistInTheArray", () => {
    it("should return an empty list for an empty list", () => {
        expect(findTheLowestPositiveIntegerThatDoesNotExistInTheArray([])).toEqual(1);
    });

    it("should give 2 for the sample data - 1", () => {
        expect(findTheLowestPositiveIntegerThatDoesNotExistInTheArray([3, 4, -1, 1])).toEqual(2);
    });
});
