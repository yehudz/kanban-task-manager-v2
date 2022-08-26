import AddNewButton from '../../../components/ui/AddNewButton'

describe('Add new task button', ()=> {
  it('shouw mount add new task button', ()=> {
    cy.mount(<AddNewButton />)
  })
})