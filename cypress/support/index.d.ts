declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      
  
      login(): Chainable<any>

      apiLogin(): Chainable<any>

      waitForFirstLoad(): Chainable<any>
      /**
       * Custom command that adds two given numbers
       */
      logout(): Chainable<any>
    }
  }