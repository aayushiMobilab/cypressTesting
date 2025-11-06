//TODO: Add description about the describe/testcases
describe("User should be able to login/logout", () => {
  beforeEach("Navigating to the url", () => {
    cy.visit("/login");
  });
  it("should be able to login with valid credentials", () => {
    cy.log("Attempting login."); //Log
    cy.get('[data-qa="login-email"]').type("jona@than.com");
    cy.get('[data-qa="login-password"]').type("ichbinjonathan536");
    cy.get('[data-qa="login-button"]').click();
    cy.get(".nav").should("contain", "Logout"); //verify
    cy.log("Successfully logged in"); //Log
  });
  it("logging in using non valid credentials, should show error", () => {
    cy.visit("https://automationexercise.com/login");
    cy.get('[data-qa="login-email"]').type("jonas@doof.com");
    cy.get('[data-qa="login-password"]').type("jonasistcool787");
    cy.get('[data-qa="login-button"').click();

    /**
     * TODO: This is duplicate. You can do something like
     * cy.contains("Your email or password is incorrect!")
     */
    cy.contains("Your email or password is incorrect!").should(
      "contain",
      "Your email or password is incorrect!"
    );
  });
});
//TODO: Add description about the describe/testcases
describe("Logout", () => {
  before("Login", () => {
    cy.visit("/login");
    cy.log("Attempting login."); //-Log
    cy.get('[data-qa="login-email"]').type("jona@than.com");
    cy.get('[data-qa="login-password"]').type("ichbinjonathan536");
    cy.get('[data-qa="login-button"]').click();
    cy.get(".nav").should("contain", "Logout"); //verify
    cy.log("Successfully logged in"); //-Log
  });
  it("should be able to logout", () => {
    cy.contains("Logout").click();
    cy.get(".shop-menu.pull-right").should("contain", "Signup / Login"); //verify your logged out
  });
});
