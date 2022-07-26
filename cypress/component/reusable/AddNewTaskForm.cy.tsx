import AddNewTaskForm from '../../../components/reusables/AddNewTaskForm'

describe('Add new task form', ()=> {
  beforeEach(()=> {
    cy.mount(<AddNewTaskForm />)
  })

  it('should render', ()=> {
    cy.get('[data-testid="add-task-form"]').should('exist')
  })

  it('should have form title', ()=> {
    cy.get('[data-testid=add-new-task-form-title]').should('exist')
  })

  it('should have a title input', ()=> {
    cy.get('[data-testid=add-new-task-form-title-input]').should('exist').type('Test task')
  })
  it('should have a description text-area', ()=> {
    let testDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    cy.get('[data-testid=add-new-task-form-description-textarea]').should('exist').type(testDescription)
  })

  it('should have a subtasks container and placeholder inputs', ()=> {
    cy.get('[data-testid=add-new-task-form-subtasks-container]').should('exist')
    cy.get('[data-testid=add-new-task-form-subtasks-container]').children().should('have.length.at.least', 1)
    cy.get('[data-testid=add-new-task-form-subtask-input]').should('exist')
    cy.get('[data-testid=add-new-task-form-subtask-input]').should('exist')
    cy.get('[data-testid="primaryButton"]').click({multiple: true})
    cy.get('[data-testid=add-new-task-form-subtasks-container]').children().should('have.length', 3)
  })

  it('should have status drop down', ()=> {
    cy.get('[data-testid=add-new-task-form-status-select]').should('exist')
  })

  it('should have create task button', ()=> {
    cy.get('[data-testid="primaryButton"]').click({multiple: true})
  })
})