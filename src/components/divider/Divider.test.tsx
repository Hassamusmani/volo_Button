import { render } from "@testing-library/react";
import { expectToHaveNoA11yViolations } from "../../utils/expectToHaveNoA11yViolations";
import { Divider } from "./Divider";

describe("Divider", () => {
    it("has no a11y violations", async () => {
        const { container } = render(<Divider />);

        await expectToHaveNoA11yViolations(container);
    });
});
