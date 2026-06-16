import {test, expect, Locator} from "@playwright/test";


test("Xpath demo in playwright", async ({page}) => {
    await page.goto("https://demowebshop.tricentis.com/")
    //1. Absolute xpath
    /* Uso de uma variável: capturamos o elemento, de forma que a legibilidade do código melhora quando adicionamos as ações*/
    const absolutelogo: Locator = page.locator('xpath = /html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]')  
    
    await expect(absolutelogo).toBeVisible();

    //2. Relative xpath
   const relativelogo: Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']")
    await expect(relativelogo).toBeVisible();
})