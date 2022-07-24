describe('empty spec', () => {
  beforeEach(()=> {
    cy.visit('/')
    cy.viewport(320,	568)
  })

  it('checks if desktop topbar exists', () => {
    cy.get('[data-testid=top-bar]').should('exist')
  })

  it('checks if there is a columns cointainer', ()=> {
    cy.get('[data-testid=columns-container]').should('exist')
  })
})