describe('website', () => {
  it('example', () => {
    // 不需要样式，只需要内容视觉对比
    cy.intercept(
      {
        url: '*.css',
        method: 'GET',
      },
      {
        statusCode: 200,
        body: `* { font-family: "sans-serif" !important; }`,
        headers: {
          'content-type': 'text/css',
        },
      },
    );

    cy.visit('/example/source');

    // 隐藏头部，规避头部遮盖内容
    cy.get('.dumi-default-header').hideElement();

    // 比对快照
    cy.get('.dumi-default-content > article').compareSnapshot({
      name: 'example-source',
      // testThreshold: 0.1,
    });
  });
});
