describe("The App works as expected.", () => {

    context("Can navigate to pages without issues.", () => {

        it("Can navigate to the home page.", () => {
            cy.visit("/");
        });

        it("Can navigate to the blog page.", () => {
            cy.visit("/blog");
            cy.contains('Latest posts')
        });

        it("Can navigate to the talks page.", () => {
            cy.visit("/talks");
            cy.contains('Latest talks')
        });
    });
});