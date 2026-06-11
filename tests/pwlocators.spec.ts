/* 
Locator - Identifies the element on the page.
DOM - Document Object Model
DOM is an API Interface provided by browser.

1) page.getByAltText() → localiza elementos, geralmente imagens, pelo texto alternativo (alt).
2) page.getByText() → localiza elementos pelo conteúdo textual exibido na página.
3) page.getByRole() → localiza elementos por atributos de acessibilidade explícitos e implícitos (roles/accessibility).
4) page.getByLabel() → localiza controles de formulário pelo texto do label associado.
5) page.getByPlaceholder() → localiza campos de entrada (input) pelo texto do placeholder.
6) page.getByTitle() → localiza elementos pelo atributo title.
7) page.getByTestId() → localiza elementos com base no atributo data-testid (ou outro atributo configurado para testes).

*/



//1) Baixar as funcoes basicas [test] e [expect]
import {test, expect, Locator} from "@playwright/test";

//2) Iniciar o registro do test
test("Verify Playwright Locators", async ({page}) => {
    await page.goto("https://demo.nopcommerce.com/") // este comando abrira a url no navegador
    
    //1) page.getByAltText() → localiza elementos, geralmente imagens, pelo texto alternativo (alt).
    const logo: Locator = page.getByAltText("nopCommerce demo store") // capturei o elemento em uma variavel, senda a variavel do tipo locator
    await expect(logo).toBeVisible(); //e validei se o logativo esta visivel.
    
    //2) page.getByText() → localiza elementos pelo conteúdo textual exibido na página.
    await expect(page.getByText("Welcome to our store")).toBeVisible(); // full
    await expect(page.getByText("Welcome to")).toBeVisible(); // provided substring
    //await expect(page.getByText(/Welcome\s + To\s + Our\s + Store/i)).toBeVisible(); // provided substring

    //3) page.getByRole() → localiza elementos por atributos de acessibilidade explícitos e implícitos (roles/accessibility).
    await page.getByRole("link",{name:'Register'}).click() // 1ª Parametro: nome da funcao + 2ª Parametro: nome do link | Aqui nao realizarmos nenhuma assercao, pois apenas realizamos a acao clique
    await page.waitForTimeout(1000) //
    await expect(page.getByRole("heading",{name:'Register'})).toBeVisible();//poderiamos usar getByText para verificar também.
    await page.waitForTimeout(1000) //

    //4) page.getByLabel() → localiza controles de formulário pelo texto do label associado.
    await page.getByLabel('First name:').fill("Samuel");
    await page.getByLabel('Last name:').fill("Coelho");
    await page.getByLabel('Email:').fill("aveteste@gmail.com")

    //5) page.getByPlaceholder() → localiza campos de entrada (input) pelo texto do placeholder.
    await page.getByPlaceholder("Search store").fill('Procurar na loja');

    
    /*Estes dois casos são mais especificos o autor passou um pagina web para testar que nao tenho acesso
    entao deixei somente os codigos.
    */
    //6) page.getByTitle() → localiza elementos pelo atributo title.
    await page.goto("LINK DA PAGINA: QUE NAO TEMOS");
    await expect(page.getByTitle("Home page link")).toHaveText("Home"); // verificar se o link contem um texto
    await expect(page.getByTitle("HyperText Markup Language")).toHaveText("HTML");

    //7) page.getByTestId() → localiza elementos com base no atributo data-testid (ou outro atributo configurado para testes).
    await expect(page.getByTestId("profile-email")).toHaveText("john.doe@example.com");
    await expect(page.getByTestId("profile-name")).toHaveText("John Doe");

})

