import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import { Button } from "./Button";
import { Icon } from "../icon/Icon";

describe("Button", () => {
    it("renders button correctly", () => {
        render(<Button>Click me</Button>);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });

    it("renders children correctly", () => {
        render(<Button>Click me</Button>);
        const button = screen.getByText("Click me");
        expect(button).toBeInTheDocument();
    });

    it("calls onClick handler when clicked", () => {
        const onClickMock = jest.fn();
        render(<Button onClick={onClickMock}>Click me</Button>);
        const button = screen.getByRole("button");
        fireEvent.click(button);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    it("renders a disabled button", () => {
        render(<Button isDisabled>Click me</Button>);
        const button = screen.getByRole("button");
        expect(button).toBeDisabled();
    });

    it("renders button with right icon", () => {
        render(<Button rightIcon={<Icon icon="plus" size={4} data-testid="icon_test" />}>Click me</Button>);
        const icon = screen.getByTestId("icon_test");
        expect(icon).toBeInTheDocument();
    });

    it("should forward the ref correctly", () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(<Button ref={ref}>Click me</Button>);
        const buttonElement = screen.getByText("Click me");
        expect(ref.current).toBe(buttonElement);
    });
});
