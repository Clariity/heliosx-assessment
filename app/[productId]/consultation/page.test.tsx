import { render, screen } from "@/test/test-setup";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Page from "./page";

describe("Consultation", () => {
  it("fills out the form succesfully", async () => {
    // ARRANGE
    render(<Page params={{ productId: "genovian-pear" }} />);

    // PRE-ASSERT
    expect(screen.queryByText("Thank you, your results have been submitted.")).toBeNull();
    expect(screen.getByRole("heading")).toHaveTextContent("Genovian Pear - Consultation");

    // ACT
    await userEvent.click(screen.getAllByRole("radio", { name: "Yes" })[0]);
    await userEvent.click(screen.getAllByRole("radio", { name: "No" })[1]);
    await userEvent.click(screen.getAllByRole("radio", { name: "No" })[2]);
    await userEvent.click(screen.getAllByRole("radio", { name: "No" })[3]);
    await userEvent.click(screen.getAllByRole("radio", { name: "Yes" })[4]);

    // ASSERT
    expect(screen.getByText("Thank you, your results have been submitted.")).toBeTruthy();
  });
});
