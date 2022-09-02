import TaskDetailsForm from '../../../components/reusables/TaskDetailsForm'
describe('Task Details Form', ()=> {
  beforeEach(()=> {
    cy.mount(<TaskDetailsForm title={''} description={''} status={''} subtasks={[{title: 'Example Subtask', isCompleted: false}, {title: 'Example Subtask 2', isCompleted: true}]}/>)
  })
  it('should render', ()=> {
    cy.get('[data-testid="task-details-container"]').should('exist')
  })

  it('should have task title', ()=> {
    cy.get('[data-testid="task-details-title"]').should('exist')
  })

  it('should have options menu', ()=> {
    cy.get('[data-testid=column-options-drop-down]')
  })

  it('should have task description', ()=> {
    cy.get('[data-testid="task-details-description"]').should('exist')
  })

  it('should have task subtasks completed count', ()=> {
    cy.get('[data-testid="task-details-subtasks-completed"]').should('exist')
  })

  it('should have task subtasks', ()=> {
    cy.get('[data-testid="task-details-subtasks-container"]').should('exist')
    cy.get('[data-testid="task-details-subtasks-container"]').should('have.length.at.least', 1)
    cy.get('[data-testid=subtask-item]').should('exist')
  })

  it('should have status selector', ()=> {
    cy.get('[data-testid="task-status-selector"]').should('exist')
  })
})