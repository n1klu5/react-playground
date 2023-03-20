describe('Syuperheroes', () => {
  it('search for superhero', () => {
    cy.visit('http://localhost:3001');

    cy.contains('A-Bomb');
    cy.get('input[type=search]').type('Batman');
    cy.contains('69');
    cy.contains('Batman');
  });

  it('change page of superheroes in table for superheroe', () => {
    cy.visit('http://localhost:3001');

    cy.contains('A-Bomb');
    cy.get('button').contains('Next').click();
    cy.contains('28');
    cy.contains('Animal Man');
  });

  it('navigate to details page of superhero and back', () => {
    cy.visit('http://localhost:3001');

    cy.contains('A-Bomb').click();
    cy.contains('Powerstats');
    cy.contains('Richard Milhouse Jones');

    cy.get('button').contains('Back').click();
    cy.contains('Abe Sapien');
  });
});
