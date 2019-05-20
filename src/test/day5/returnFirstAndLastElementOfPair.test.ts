import {car, cdr, cons} from "../../main/day5/returnFirstAndLastElementOfPair";

describe("returnFirstAndLastElementOfPair", () => {
    describe("car", () => {
        it("should return first element of pair", () => {
            expect(car(cons(3, 4))).toEqual(3);
            expect(car(cons("hello", "world"))).toEqual("hello");
            expect(car(cons(1, "world"))).toEqual(1);
        });
    });
    describe("cdr", () => {
        it("should return second element of pair", () => {
            expect(cdr(cons(3, 4))).toEqual(4);
            expect(cdr(cons("hello", "world"))).toEqual("world");
            expect(cdr(cons("hello", 1))).toEqual(1);
        });
    });
});
