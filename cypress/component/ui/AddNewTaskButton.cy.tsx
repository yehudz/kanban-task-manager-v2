import AddNewTaskButton from '../../../components/ui/AddNewTaskButton'

describe('Add new task button', ()=> {
  it('shouw mount add new task button', ()=> {
    cy.mount(<AddNewTaskButton />)
  })
})