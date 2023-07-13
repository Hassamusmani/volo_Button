import { convertSpaceUnit } from "./convertSpaceUnit";

describe("convertSpaceUnit", () => {
    it.each`
        input       | output
        ${"1rem"}   | ${"16px"}
        ${"0rem"}   | ${"0px"}
        ${"4.5rem"} | ${"72px"}
        ${"1em"}    | ${"16px"}
        ${"0em"}    | ${"0px"}
        ${"4.5em"}  | ${"72px"}
        ${"16px"}   | ${"1rem"}
        ${"8px"}    | ${"0.5rem"}
        ${"0px"}    | ${"0rem"}
        ${"0"}      | ${""}
    `("converts $input to $output", (params) => {
        const { input, output } = params;
        expect(convertSpaceUnit(input)).toEqual(output);
    });

    it.each(["notrem", "notem", "notpx", "nothing"])("throws error when parsing fails", (input) => {
        expect(() => convertSpaceUnit(input)).toThrow(`${input}: cannot parse spaceUnit`);
    });
});
