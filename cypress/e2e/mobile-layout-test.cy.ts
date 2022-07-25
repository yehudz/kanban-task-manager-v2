describe('empty spec', () => {
  beforeEach(()=> {
    cy.visit('/')
    cy.viewport(320,	568)
  })

  it('checks if topbar exists', () => {
    cy.get('[data-testid=top-bar]').should('exist')
  })

  it('checks if there is a columns cointainer', ()=> {
    cy.get('[data-testid=columns-container]').should('exist')
  })

  it('checks if there is a column title', ()=> {
    cy.get('[data-testid=column-title]').should('exist')
  })

  it('checks if there is a logo container', ()=> {
    cy.get('[data-testid=logo-container]').should('exist')
  })

  it('checks if there is an add new task button', ()=> {
    cy.get('[data-testid=add-new-task-button]').should('exist')
  })

  it('checks if there is an options button for column', ()=> {
    cy.get('[data-testid=column-options-drop-down]').should('exist')
  })

  it('opens the mobile menu', ()=> {
    cy.get('[data-testid=mobile-menu]').should('exist')
    cy.get('[data-testid=column-title]').click()
    cy.get('[data-testid=mobile-menu]').should('not.have.class', 'hidden')

  })
})