describe('Create new task', ()=> {
  beforeEach(()=> {
    cy.visit('/')
  })
  it('should create new task', ()=> {
    cy.get('[data-testid=add-new-task-button]').click()
    cy.get('[data-testid=modal-container]').should('exist')
    cy.get('[data-testid=add-task-form]').should('exist')
  })
})