// https://docs.cypress.io/api/introduction/api.html

describe('P4', () => {
  it('Visits the homepage', () => {
    cy.visit('/')
    cy.contains('h2', 'Try to eat more Veggie!')
  })
  it('shows all the foods', () => {
    cy.visit('/foods')
    cy.contains('[data-test="test-for-food-name"]', 'Hummus')
  })
})
