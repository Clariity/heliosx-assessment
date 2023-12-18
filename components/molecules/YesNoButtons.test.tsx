import { render, screen } from "@/test/test-setup";
import userEvent from "@testing-library/user-event";

import { YesNoButtons } from "./YesNoButtons";

describe("YesNoButtons", () => {
  it("selects Yes and then Selects No", async () => {
    // ARRANGE
    const handleAnswerClick = jest.fn();
    render(<YesNoButtons onChange={handleAnswerClick} questionIndex={0} />);

    // ACT
    await userEvent.click(screen.getByText("Yes"));
    await userEvent.click(screen.getByText("No"));

    // ASSERT
    expect(handleAnswerClick).toHaveBeenCalledWith("yes", 0);
    expect(handleAnswerClick).toHaveBeenCalledWith("no", 0);
  });
});
