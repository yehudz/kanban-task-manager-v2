
import RightSidebar from '../../../components/layout/RightSidebar'

describe('Right side bar', ()=> {
  it('should have a right sidebar', ()=> {
    cy.mount(<RightSidebar />)
    cy.get('[data-testid=right-sidebar]').should('exist')
  })
})