import BoardForm from "../../../components/reusables/BoardForm"

describe('Add new board form', ()=> {
  beforeEach(()=> {
    cy.mount(<BoardForm formTitle="Add New Board" boardName="" boardColumns={[{name: '', color: '', tasks: []}]}/>)
  })

  it('should render', ()=> {
    cy.get('[data-testid="add-new-board-form"]').should('exist')
  })

  it('should have title', ()=> {
    cy.get('[data-testid="add-new-board-form-title"]').should('exist')
  })

  it('should have title input', ()=> {
    cy.get('[data-testid="add-new-board-form-title-input"]').should('exist')
  })

  it('should have Boards Columns creator', ()=> {
    cy.get('[data-testid="add-new-board-form-columns-creator"]').should('exist')
    cy.get('[data-tesid="add-new-board-form-column"]').should('exist')
  })

  it('should have create board button', ()=> {
    cy.get('[data-testid="primaryButton"]').should('exist')
  })
})