import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

Given(`que un usuario ingresa a la página de {string}`, (url) => {
  if (url === "pokemon") {
    url = "https://www.pokemon.com/el";
  }
  cy.visit(url);
});

When(`presiona {string}`, (btnText) => {
  cy.contains(btnText).click();
});
