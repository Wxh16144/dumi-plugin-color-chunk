describe('website', () => {
  it('example', () => {
    cy.visit('/example/source');

    cy.get('.dumi-default-content > article > .markdown').toMatchSnapshot();
  });
});
