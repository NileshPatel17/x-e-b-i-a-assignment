/// <reference types="Cypress" />

describe('App', () => {
  describe('validate routes', () => {
    it('should redirect to /login', () => {
      cy.visit('/');
      cy.contains('Login').should('exist');

      cy.visit('/planets/1');
      cy.contains('Login').should('exist');
    });

    it('should redirect to no-match',()=>{
        cy.visit('/planet/3');
        cy.contains('No match').should('exist')
    })
  });
});
