import {car, cdr, cons} from "../../main/day5/returnFirstAndLastElementOfPair";

describe("returnFirstAndLastElementOfPair", () => {
    describe("car", () => {
        it("should return first element of pair", () => {
            expect(car(cons(3, 4))).toEqual(3);
        });
    });
    describe("cdr", () => {
        it("should return second element of pair", () => {
            expect(cdr(cons(3, 4))).toEqual(4);
        });
    });
});
