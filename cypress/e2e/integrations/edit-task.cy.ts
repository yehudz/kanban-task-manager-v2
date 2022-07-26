describe('Edit Task', ()=> {
  beforeEach(()=> {
    cy.visit('/')
  })

  it('should open a task, click on options menu and select edit task, change title, status, and save edit', ()=> {
    cy.get('[data-testid=task-item]').first().click()
    cy.get('[data-testid=task-details-container]').should('exist')
    cy.get('[data-testid="options-menu-button"]').eq(1).click({multiple: true})
    cy.get('[data-testid="options-menu"]').should('exist')
    cy.wait(2000)
    cy.get('[data-testid="options-menu-option"]').first().click()
    cy.get('[data-testid="task-form"]').should('exist')
  })
})