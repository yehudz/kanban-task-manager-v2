
import BoardTitle from '../../../components/ui/BoardTitle'

describe('<BoardTitle>', () => {
  it('should mount column title', () => {
    cy.viewport(320,	568)
    cy.mount(<BoardTitle title={'Column Title'} isMobile={true} handleClick={()=> {}}/>)
    cy.get('[data-testid=column-title]').should('exist')
    cy.get('[data-testid=column-drop-down-icon]').should('exist')
  })

  it('should show mobile drop down menu', () => {
    cy.viewport(320,	568)
    cy.mount(<BoardTitle title={'Column Title'} isMobile={true} handleClick={()=> {}}/>)
    cy.get('[data-testid=column-drop-down-icon]').should('exist')
  })

  it('should not show drop down menu on desktop', () => {
    cy.viewport(1280,	800)
    cy.mount(<BoardTitle title={'Column Title'} isMobile={false} handleClick={()=> {}}/>)
    cy.get('[data-testid=column-title]').should('exist')
    cy.get('[data-testid=column-drop-down-icon]').should('not.exist')
  })
})