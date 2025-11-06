// This Test is to automaticly write a ContactUsForm and Newsletter subscription

describe("User should be able to write a ContactUsForm and can subscribe to Newsletter", () => {
  it("ContactUsForm", () => {
    cy.visit("/contact_us"); // Filling out the Information
    cy.get('[data-qa="name"]').type("Jonathan");
    cy.get('[data-qa="email"]').type("jona@than.com");
    cy.get('[data-qa="subject"]').type("Job Interview");
    cy.get('[data-qa="message"]').type(
      "Hello, I want to talk to you about my recent Job Interview! Hope to hear from you again. Greetings Jonathan"
    );
    //TODO: Use relative path meaning .selectFile("cypress/fixtures/TesterTextToUpload.txt")
    cy.get("input[type=file]").selectFile(
      "/Users/alexandergschwendtner/Documents/cypress-learning/cypress/fixtures/TesterTextToUpload.txt"
    );
    cy.get('[data-qa="submit-button"]').click();
    // Verifies that the Message got sent
    /**
     * TODO: This is duplicate. You can do something like
     * cy.get(".status")
        .should("be.visible")
        .and(
          "contain.text",
          "Success! Your details have been submitted successfully.",
        )
     */
    cy.contains(
      "Success! Your details have been submitted successfully."
    ).should(
      "contain",
      "Success! Your details have been submitted successfully."
    );
    cy.contains("Home").click();
    cy.get("h2").should("contain", "Features Items");
  });
  it("HomePageNewsSubscription", () => {
    cy.visit("/");
    cy.get("h2").should("contain", "Features Items");
    cy.get("#susbscribe_email").type("jona@than.com");
    cy.get("#subscribe").click();
    cy.contains("You have been successfully subscribed!");
  });
});
