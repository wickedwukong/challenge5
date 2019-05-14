import {getGridStatus} from "../src/Challenge5";

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
