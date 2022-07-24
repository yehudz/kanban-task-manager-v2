
import ColumnTitle from '../../../components/ui/ColumnTitle'
describe('<ColumnTitle>', () => {
  
  it('should mount column mobile title', () => {
    cy.viewport(320,	568)
    cy.mount(<ColumnTitle title={'Column Title'} isMobile={true}/>)
    cy.get('[data-testid=column-title]').should('exist')
    cy.get('[data-testid=column-drop-down-icon]').should('exist')
  })

  it('should have mobile logo container', () => {
    cy.viewport(320,	568)
    cy.mount(<ColumnTitle title={'Column Title'} isMobile={true}/>)
    cy.get('[data-testid=column-title]').should('exist')
    cy.get('[data-testid=column-drop-down-icon]').should('exist')
  })

  it('should mount column title', () => {
    cy.viewport(1280,	800)
    cy.mount(<ColumnTitle title={'Column Title'} isMobile={false}/>)
    cy.get('[data-testid=column-title]').should('exist')
    cy.get('[data-testid=column-drop-down-icon]').should('not.exist')
  })
})