describe('Create new task', ()=> {
  beforeEach(()=> {
    cy.visit('/')
  })
  it('should create new task', ()=> {
    cy.get('[data-testid=add-new-task-button]').click()
    cy.get('[data-testid=modal-container]').should('exist')
    cy.get('[data-testid=add-task-form]').should('exist')

    cy.get('[data-testid="new-task-title"]').type('Test task')
    let testDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    cy.get('[data-testid=add-new-task-form-description-textarea]').type(testDescription)
  
    cy.get('[data-testid=add-new-task-form-subtasks-container]').should('exist')
    cy.get('[data-testid=add-new-task-form-subtasks-container]').children().should('have.length.at.least', 1)
    cy.get('[data-testid="subtask-input"]').eq(0).type('Subtask one')
    cy.get('[data-testid="subtask-input"]').eq(1).type('Subtask Two')
  
    cy.get('[data-testid="primaryButton"]').eq(0).click({multiple: true})
    cy.get('[data-testid="subtask-input"]').eq(2).type('Subtask Three')

    cy.get('[data-testid=status-select]').select('Done')

    cy.get('[data-testid="primaryButton"]').eq(1).click({multiple: true})
  })
})