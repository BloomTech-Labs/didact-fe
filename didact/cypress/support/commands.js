// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('registerUserIfNeeded', () => {
    cy.request({
        method: 'POST',
        url: 'https://didactlms-staging.herokuapp.com/api/auth/register',
        body: {
            "first_name": "test",
            "last_name": "tester",
            //variables from cypress.json
            ...Cypress.env('user'),
        },
        //ignore duplicate user error
        failOnStatusCode: false,
    })
})

Cypress.Commands.add('loginBeforeTest', () => {
    cy.request({
        method: 'POST',
        url: 'https://didactlms-staging.herokuapp.com/api/auth/login',
        body: {
            ...Cypress.env('user')
        },
    })
    .then(res => {
        localStorage.setItem("token", res.body.token)
    })
})