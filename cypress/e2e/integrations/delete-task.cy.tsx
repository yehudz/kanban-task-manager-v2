describe('Delete task', ()=> {
  beforeEach(()=> {
    cy.visit('/')
  })
  it('should delete a task', ()=> {
    cy.get('[data-testid=task-item]').first().click()
    cy.get('[data-testid=task-details-container]').should('exist')
    cy.get('[data-testid=modal-container]').should('exist')
    cy.get('[data-testid="options-menu-button"]').eq(1).click({multiple: true})
    cy.get('[data-testid="options-menu"]').should('exist')
    cy.wait(500)
    cy.get('[data-testid="options-menu-option"]').last().click()
    cy.get('[data-testid="warning-message-container"]').should('exist')
    cy.get('[data-testid="warning-message-title"]').contains('Delete this task?')
    cy.get('[data-testid="warning-message-tex"]').should('exist')
    cy.get('[data-testid="warning-message-confirm-button"]').should('exist')
    cy.get('[data-testid="warning-message-cancel-button"]').should('exist')

    cy.get('[data-testid="warning-message-confirm-button"]').click()
  })
})