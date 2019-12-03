/// <reference types="Cypress" />

describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should contain Login header', () => {
    cy.contains('Login');
  });

  it('invalid login',()=>{
      cy.get('[data-test="input-username"]').type('abc')
      cy.get('[data-test="input-password"]').type('abc')
    //   cy.get('[data-test="btn-login"]').click();
    //   cy.contains('Invalid User or Password')
  })
});
