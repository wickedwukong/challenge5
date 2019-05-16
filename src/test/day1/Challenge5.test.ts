import {getGridStatus} from "../../main/day1/Challenge5";

describe("getGridStatus", () => {
    it("says red win", () => {
        expect(getGridStatus(
            [".......",
            ".......",
            ".R.....",
            ".r.....",
            ".ry....",
            ".ryyy.."])).toEqual("Red wins");
    });
});
