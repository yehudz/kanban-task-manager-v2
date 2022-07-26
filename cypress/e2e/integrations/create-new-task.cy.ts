describe('Create new task', ()=> {
  beforeEach(()=> {
    cy.visit('/')
  })
  it('should show modal after clicking add new task button', ()=> {
    cy.get('[data-testid=add-new-task-button]').click()
    cy.get('[data-testid=modal-container]').should('exist')
    cy.get('[data-testid=add-task-form]').should('exist')
  })
})