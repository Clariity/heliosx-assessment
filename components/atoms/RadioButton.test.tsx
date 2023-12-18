import { render, screen } from "@/test/test-setup";
import userEvent from "@testing-library/user-event";

import { RadioButton } from "./RadioButton";

describe("RadioButton", () => {
  it("fires onChange when selected", async () => {
    // ARRANGE
    const onChange = jest.fn();
    render(
      <RadioButton onChange={() => onChange("yes", 0)} questionIndex={0} value="yes" />
    );

    // ACT
    await userEvent.click(screen.getByText("Yes"));

    // ASSERT
    expect(onChange).toHaveBeenCalledWith("yes", 0);
  });
});
