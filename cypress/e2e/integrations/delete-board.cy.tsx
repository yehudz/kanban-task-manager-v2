describe('Delete task', ()=> {
  beforeEach(()=> {
    cy.visit('/')
  })
  it('should delete a task', ()=> {
    cy.get('[data-testid="options-menu-button"]').eq(0).click({multiple: true})
    cy.get('[data-testid="options-menu-option"]').last().click()
    cy.wait(500)
    cy.get('[data-testid=modal-container]').should('exist')
    cy.get('[data-testid="warning-message-title"]').contains('Delete this board?')
    cy.get('[data-testid="warning-message-tex"]').should('exist')
    cy.get('[data-testid="warning-message-confirm-button"]').should('exist')
    cy.get('[data-testid="warning-message-cancel-button"]').should('exist')

    cy.get('[data-testid="warning-message-confirm-button"]').click()
  })
})