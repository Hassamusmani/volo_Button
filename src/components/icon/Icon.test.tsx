import { render, screen } from "@testing-library/react";
import { expectToHaveNoA11yViolations } from "../../utils/expectToHaveNoA11yViolations";
import { Icon } from "./Icon";
import { iconNames } from "./icons";

describe("Icon", () => {
    it.each(iconNames)("%p has the right default dimensions", (iconName) => {
        render(<Icon icon={iconName} aria-label={iconName} />);
        const svg = screen.getByLabelText(iconName);

        expect(svg).not.toHaveAttribute("width");
        expect(svg).not.toHaveAttribute("height");
        expect(svg).toHaveAttribute("viewBox", "0 0 16 16");
    });

    it("has no a11y violations", async () => {
        const { container } = render(<Icon icon="download" aria-label="alert" />);

        await expectToHaveNoA11yViolations(container);
    });
});
