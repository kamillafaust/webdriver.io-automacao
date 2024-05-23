describe("Login", () => {
  it("Efetuar login válido", async () => {
    await browser.url("/");
    await $('[data-test="username"]').setValue("standard_user");
    await $('[data-test="password"]').setValue("secret_sauce");
    await $('[data-test="login-button"]').click();

    const productsTittle = await $('[data-test="title"]');
    const productsList = await $('[data-test="inventory-list"]');

    await expect(productsTittle).toExist();
    await expect(productsList).toExist();
    await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
  });
});
