import {test,expect} from "@playwright/test";

/*
test("title", ()=>{

})
*/

/* Teste simples para verificar
a) O título de página.
*/
test("Verify page title", async ({page})=> {

   await page.goto("https://app.numbr.com.br"); //Abrindo a pagina
    let title: string = await page.title(); // Capturando o título da pagina | A partir daqui o teste é opcional, usado apenas se quisermos ver o título da página no console log
    console.log("Title:", title); // imprimindo o titulo da pagina

    await expect(page).toHaveTitle("numbr - Every great decision starts here!");
})

