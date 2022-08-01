describe('Edit Board', ()=> {
  beforeEach(()=> {
    cy.visit('/')
  })
  it('Should click options menu for board, show modal with board details, change name, delete one column and save changes', ()=> {
    cy.wait(1000)
    cy.get('[data-testid="options-menu-button"').eq(0).click()
    cy.get('[data-testid="options-menu-option"').first().click()
    cy.get('[data-testid="board-title-input"]').should('have.value', 'Platform Launch')
    cy.get('[data-testid="board-title-input"]').type('Platform Launch Date')
    cy.get('[data-testid="primaryButton"]').eq(0).click()
    cy.get('[data-tesid="add-new-board-form-column"]').last().type('Ready for QA')
    cy.wait(500)
    cy.get('[data-testid="primaryButton"]').eq(1).click()
  })
})