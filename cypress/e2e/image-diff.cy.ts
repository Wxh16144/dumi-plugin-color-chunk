describe('website', () => {
  it('example', () => {
    cy.visit('/example/source');

    // cy.get('.markdown').invoke('css', 'font-family', 'unset');

    // 隐藏头部，规避头部遮盖内容
    cy.get('.dumi-default-header').hideElement();

    // 比对快照
    cy.get('.dumi-default-content > article').compareSnapshot({
      name: 'example-source',
      // testThreshold: 0.1,
    });
  });
});
