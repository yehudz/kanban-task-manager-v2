import ColumnsListMenu from '../../../components/ui/ColumnsListMenu'

describe('Columns List Menu', ()=> {
  it('should render columns list menu', ()=> {
    cy.mount(<ColumnsListMenu />)
    cy.get('[data-testid=columns-list-menu-title]').should('exist')
    cy.get('[data-testid=add-board-button]').should('exist')
  })
})