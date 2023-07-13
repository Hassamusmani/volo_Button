import { match } from "ts-pattern";

const BASE_FONT_SIZE = 16;
const numberMatcher = /-?\d+(?:\.\d+)?/;
const remMatcher = /(-?\d+(?:\.\d+)?)rem/;
const emMatcher = /(-?\d+(?:\.\d+)?)em/;
const pxMatcher = /(-?\d+(?:\.\d+)?)px/;

const emToPx = (em: string) => {
    const emNumber = Number(em.match(emMatcher)?.[1]);
    const px = emNumber * BASE_FONT_SIZE;
    return `${px}px`;
};

const remToPx = (rem: string) => {
    const remNumber = Number(rem.match(remMatcher)?.[1]);
    const px = remNumber * BASE_FONT_SIZE;
    return `${px}px`;
};

const pxToRem = (px: string) => {
    const pxNumber = Number(px.match(pxMatcher)?.[1]);
    const rem = pxNumber / BASE_FONT_SIZE;
    return `${rem}rem`;
};

const matches = (regex: RegExp) => (string: string) => regex.test(string);

/** This is a utility function for displaying px values in Storybook.
 * Do not use for productive things! */
export const convertSpaceUnit = (spaceUnit: string) =>
    match(spaceUnit)
        .when(matches(remMatcher), remToPx)
        .when(matches(emMatcher), emToPx)
        .when(matches(pxMatcher), pxToRem)
        .when(matches(numberMatcher), () => "")
        .otherwise(() => {
            throw new Error(`${spaceUnit}: cannot parse spaceUnit`);
        });
