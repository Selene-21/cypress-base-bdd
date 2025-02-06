class HomePokemon {
  getMainBts() {
    return cy.get('[data-analytics-label="primary-nav"] li');
  }

  getSearchInput() {
    return cy.get('[data-type="name"]');
  }

  getSearchBtn() {
    return cy.get('[id="search"]');
  }

  getPokeCard() {
    return cy.get('[class="pokemon-info"]');
  }

  getNewArticle() {
    return cy.get('[class="news-article"]');
  }

  getAricleImage() {
    return this.getNewArticle().find("img");
  }

  getArticleDate() {
    return cy.get('[class="date"]');
  }

  getArticleTag() {
    return cy.get('[class="tags"]');
  }

  getArticleTitle() {
    return cy.get("h3");
  }

  getArticleText() {
    return cy.get("h3+p");
  }
}

module.exports = new HomePokemon();
