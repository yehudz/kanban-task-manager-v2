
import LeftSidebar from '../../../components/layout/LeftSidebar'

describe('Right side bar', ()=> {
  it('should have a right sidebar', ()=> {
    cy.mount(<LeftSidebar />)
    cy.get('[data-testid=right-sidebar]').should('exist')
  })
})