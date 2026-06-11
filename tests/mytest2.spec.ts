import {test,expect} from "@playwright/test";



test("Verify page URL", async ({page})=> {

   await page.goto("https://app.numbr.com.br"); //Abrindo a pagina
    
   let url: string = await page.url(); // Capturando o título da pagina | A partir daqui o teste é opciona, usado apenas se quisermos ver o título da página no console log
    console.log("Url:", url); // imprimindo o titulo da pagina

    await expect(page).toHaveURL("https://app.numbr.com.br")// ou expect(page).toHaveURL(/automationpractice/)
})

