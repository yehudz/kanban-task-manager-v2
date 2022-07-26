import OptionsMenuButton from "../../../components/ui/OptionsMenuButton"
import OptionsMenu from '../../../components/reusables/OptionsMenu'

describe('Options menu', ()=> {
  beforeEach(()=> {
    cy.mount(<OptionsMenu menuItems={['Edit Task', 'Delete Task']}/>)
  })
  it('should render', ()=> {
    cy.get('[data-testid="options-menu-container"]').should('exist')
  })

  it('should open menu', ()=> {
    cy.get('[data-testid="options-menu-button"]').click()
    cy.get('[data-testid="options-menu"]').should('exist')
  })

  it('should make selection and close menu', ()=> {
    cy.get('[data-testid="options-menu-button"]').click()
    cy.get('[data-testid="options-menu"]').should('exist')
    cy.get('[data-testid="options-menu-option"]').first().click()
    cy.get('[data-testid="options-menu"]').should('not.exist')
  })
})