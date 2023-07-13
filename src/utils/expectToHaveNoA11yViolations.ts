import { act } from "@testing-library/react";
import { axe } from "jest-axe";

const actAndGet = async <T extends {}>(callback: () => Promise<T>) => {
    let result: T | undefined;
    await act(async () => {
        result = await callback();
    });
    return result;
};

export const expectToHaveNoA11yViolations = async (container: HTMLElement) => {
    const results = await actAndGet(() => axe(container));
    expect(results).toHaveNoViolations();
};
