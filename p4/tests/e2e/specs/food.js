describe('Whats in my plate homepage', () => {
  it('Visits the homepage', () => {
      cy.visit('/')
      cy.contains('p', 'Your Plate is a convenient tool to measure the energy content of foods and track of your colorie')
  })

  let food = {
    name: 'Almond',
    id: 1
  }

  it('shows all the available food', () => {


    cy.visit('pages/foods/');
    cy.contains('[data-test="food-name"]', food.name);

    // all foods available
    cy.get('[data-test="food-name"]').should('have.length', 18);

    // click through to individual food page
    cy.get('[data-test="food-name"]').first().click();

    // confirm food page shows the nutrition
    cy.contains('dt', 'carbohydrate');
  })

  it('shows categories', () => {


    cy.visit('pages/categories/');
    cy.contains('li','snack');
  })

  it('everything about plate', () => {

    cy.visit('pages/food/' + food.id);

    // the button exist
    cy.get('[data-test="add-to-plate-btn"]').click();

    // add 1 item
    cy.contains('[data-test="plate-count"]', 1);

    // confirm alert works
    // cy.contains('[data-test="alert"]');

    cy.visit('pages/plate');

    // the added item shows on plate page
    cy.contains('[data-test="plate-count"]', '1 oz ' + food.name);

    // remove button function
    cy.get('[data-test="rm-from-plate"]').click();

    // plate number bacomes 0
    cy.contains('[data-test="plate-count"]', 0);

    //show no items when there's noting in the plate
    cy.contains('No items');

  })

  it('feedback page shows as is', () => {

    cy.visit('pages/feedback');

    cy.contains('h1', 'subscirbe our newsletter')

  })

})