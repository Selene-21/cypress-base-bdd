import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const poke = require("../../page/pokemon_home");

Then(`check the name of main buttons`, (table) => {
  const btnTxts = table.rows().flat();

  btnTxts.forEach((btnText, $id) => {
    poke.getMainBts().eq($id).should("have.text", btnText);
  });
});

When(`completa el campo de búsqueda pokemon con {string}`, (txtToSearch) => {
  poke.getSearchInput().type(txtToSearch);
});

When(`presiona el botón de la lupa`, () => {
  poke.getSearchBtn().click();
});

Then(
  `se comprueba que todos los números de pokemon contienen {string}`,
  (numToCheck) => {
    poke.getPokeCard().each((card) => {
      cy.wrap(card)
        .should("contain.text", "N.º")
        .and("contain.text", numToCheck);
    });
  }
);

Then(
  `se comprueba que la noticia contenga una imagen, fecha, tag, título y descripción`,
  () => {
    poke.getNewArticle().each((noticia) => {
      cy.wrap(noticia).within(() => {
        poke.getAricleImage().should("be.visible");
        poke.getArticleDate().should("be.visible");
        poke.getArticleTag().should("be.visible");
        poke.getArticleTitle().should("be.visible");
        poke.getArticleText().should("be.visible");
      });
    });
  }
);
