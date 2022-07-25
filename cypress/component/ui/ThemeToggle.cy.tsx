import ThemeToggle from '../../../components/ui/ThemeToggle'

describe('Theme toggle menu', ()=> {
  it('should toggle theme', ()=> {
    cy.mount(<ThemeToggle />)
    cy.get('[type="checkbox"]').check()
    cy.get('[type="checkbox"]').uncheck()
  })
})