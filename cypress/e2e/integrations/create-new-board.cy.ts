describe('Create new board', ()=> {
  beforeEach(()=> {
    cy.visit('/')
  })

  it('Should open modal to create a new board', ()=> {
    cy.get('[data-testid="add-board-button"]').click()
    cy.get('[data-testid="modal-container"]').should('exist')
    cy.get('[data-testid="primaryButton"]').eq(1).click()
    cy.get('[data-testid="empty-input-warning"]').should('exist')
    cy.wait(500)
    cy.get('[data-testid="board-title-input"]').type('Test board')
    cy.get('[data-testid="column-name-input"]').eq(0).type('Need to fix design')
    cy.get('[data-testid="primaryButton"]').eq(0).click()
    cy.get('[data-testid="column-name-input"]').eq(1).type('Another Subtask')
    cy.get('[data-testid="primaryButton"]').eq(1).click()
  })
})