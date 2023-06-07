/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://dashboard.midtrans.com/login')
  })

  it('Proses Login', () => {
    cy.get('#user_email').type('testingqa897@gmail.com')
    cy.get('#user_password').type('A!1qwertyuiop')
    cy.get('#new_user > .l-btn').click()
    //expected Result
    cy.contains('One step closer to activate your Midtrans account!')    
  })
})
