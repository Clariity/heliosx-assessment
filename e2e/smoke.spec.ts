import { test, expect } from "@playwright/test";

test("can navigate to consultation form and fill it out successfully", async ({
  page,
}) => {
  await page.goto("/");

  await page.getByRole("link", { name: "Start Consultation" }).click();

  await page.getByRole("radio", { name: "Yes" }).nth(0).click();
  await page.getByRole("radio", { name: "No" }).nth(1).click();
  await page.getByRole("radio", { name: "No" }).nth(2).click();
  await page.getByRole("radio", { name: "No" }).nth(3).click();
  await page.getByRole("radio", { name: "Yes" }).nth(4).click();

  await expect(
    page.getByText("Thank you, your results have been submitted.")
  ).toBeVisible();
});
