it('handles ES6 features', () => {
  const o = {
    // @ts-ignore
    name: cy.stub().returns('Joe')
  }
  const proxy = new Proxy(o, {
    get (target, method) {
      return target.name
    }
  })
  // @ts-ignore
  expect(proxy.whatever()).to.equal('Joe')
  expect(o.name).to.have.been.calledOnce
})