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

  it('Proses Registrasi', () => {
    cy.contains('Sign Up').click({force:true})
    cy.get('#user_merchant_name').type('Merchant Testing Qa +4')
    cy.get('#user_full_name').type('Full Name Testing Qa +4')
    cy.get('#user_email').type('testing+4@gmail.com')
    cy.get('#user_phone').type('87542018886')
    cy.get('#user_business_type_corporate').click()
    cy.get('#user_password').type('A!1qwertyuiop')
    cy.get('#user_password_confirmation').type('A!1qwertyuiop')
    cy.get('#signup_btn').click({force:true})
    //expected Result
    cy.contains('Please check your inbox. A message with a confirmation link has been sent to your email address. Please open the link to activate your account.')    
  })
})
