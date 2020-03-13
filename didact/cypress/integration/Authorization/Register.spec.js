import faker from 'faker'

describe("a user registering for didact", () => {

    it("registers a user", () => {
        cy.visit('/register')
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const email = faker.internet.email();
        const password = faker.phone.phoneNumber();
        
        cy.get('[name="first_name"').type(firstName).should('have.value', firstName)
        cy.get('[name="last_name"').type(lastName).should('have.value', lastName)
        cy.get('[name="email"').type(email).should('have.value', email)
        cy.get('[name="password"').type(password).should('have.value', password)
        cy.get('[name="confirmPassword"').type(password).should('have.value', password)
        cy.get("button").last().click();
    })
})