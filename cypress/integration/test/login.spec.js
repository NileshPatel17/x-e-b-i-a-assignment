/// <reference types="Cypress" />

describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should contain Login header', () => {
    cy.contains('Login').should('exist');
  });

  it('invalid login',()=>{
    cy.location('pathname').should('eq','/login')
      cy.get('[data-test="input-username"]').type('abc').should('have.value', 'abc')
      cy.get('[data-test="input-password"]').type('abc').should('have.value', 'abc')
    //   cy.get('[data-test="btn-login"]').click();
    //   cy.contains('Invalid User or Password')
  })
});
