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

    //3. contains(): o caminho do exemplo contem mais de um elemento.
    /*
    a) O nosso expect() aqui está apenas comparando a quantidade, logo, não é necessário usar o await, pois não estamos validando a visibilidade ou algo do tipo, apenas a quantidade de elementos que existem com esse caminho.
    */
    const products: Locator = page.locator("//h2/a[contains(@href,'computer')]")
    const productsCount: number = await products.count() // conta quantos elementos existem com esse caminho
    expect(productsCount).toBeGreaterThan(0) // valida se a quantidade de elementos é maior que 0 |Outros: igual a, menor que, etc.
})