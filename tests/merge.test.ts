import { merge } from "../src/merge";

describe("merge()", () => {
    it("merges three arrays correctly", () => {
        const a = [1, 3, 5];
        const b = [6, 4, 2];
        const c = [0, 7, 8];
        expect(merge(a, b, c)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it("merges three different size arrays correctly", () => {
        const a = [1, 3, 5, 9, 10];
        const b = [6, 4, 2, 0];
        const c = [0, 7, 8];
        expect(merge(a, b, c)).toEqual([0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it("handles some empty arrays", () => {
        expect(merge([], [5, 3, 1], [])).toEqual([1, 3, 5]);
    });

    it("handles all empty arrays", () => {
        expect(merge([], [], [])).toEqual([]);
    });

    it("handles duplicate values", () => {
        expect(merge([1, 2], [2, 1], [1, 2])).toEqual([1, 1, 1, 2, 2, 2]);
    });
});
