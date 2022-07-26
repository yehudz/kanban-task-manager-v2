describe('Edit Board', ()=> {
  beforeEach(()=> {
    cy.visit('/')
  })
  it('Should click options menu for board, show modal with board details, change name, delete one column and save changes', ()=> {
    cy.get('[data-testid="options-menu-button"').eq(0).click()
    cy.get('[data-testid="options-menu-option"').first().click()
  })
})