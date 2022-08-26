import { last } from "cypress/types/lodash"

describe('Create new task', ()=> {
  beforeEach(()=> {
    cy.visit('/')
  })
  it('should create new task', ()=> {
    cy.get('[data-testid=add-new-task-button]').click()
    cy.get('[data-testid=modal-container]').should('exist')
    cy.get('[data-testid=task-form]').should('exist')

    cy.get('[data-testid="task-title-input"]').type('Test task')
    let testDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    cy.get('[data-testid=task-form-description-textarea]').type(testDescription)
  
    cy.get('[data-testid=task-form-subtasks-container]').should('exist')
    cy.get('[data-testid=task-form-subtasks-container]').children().should('have.length.at.least', 1)
   
  
    cy.get('[data-testid="subtask-input"]').eq(0).type('Subtask one')

    cy.get('[data-testid="subtask-input"]').eq(1).type('Subtask Two')
    
    cy.get('[data-testid="primaryButton"]').eq(0).click({multiple: true})
    cy.get('[data-testid="subtask-input"]').eq(2).type('Subtask Three')

    cy.get('[data-testid=status-select]').click()
    cy.get('[data-testid="select-options"]').should('exist')
    cy.get('[data-testid="status-select-option"]').last().click()

    cy.get('[data-testid="primaryButton"]').eq(1).click({multiple: true})
  })
})