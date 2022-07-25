import TaskDetailsForm from '../../../components/reusables/TaskDetailsForm'

describe('Task Details Form', ()=> {
  beforeEach(()=> {
    cy.mount(<TaskDetailsForm />)
  })
  it('should render', ()=> {
    cy.get('[data-testid="task-details-container"]').should('exist')
  })
})