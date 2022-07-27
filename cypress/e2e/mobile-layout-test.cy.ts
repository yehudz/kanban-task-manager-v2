describe('Mobile Layout Testing', () => {
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
    cy.get('[data-testid=board-title]').should('exist')
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

  it('opens the mobile menu and have list items', ()=> {
    cy.get('[data-testid=mobile-menu]').should('exist')
    cy.get('[data-testid=board-title]').click({force: true})
    cy.get('[data-testid=mobile-menu]').should('not.have.class', 'hidden')

    cy.get('[data-testid=board-list-items]').should('have.length.at.least', 1)
    cy.get('[data-testid=board-list-item]').should('exist')
    cy.get('[data-testid=board-list-item]').should('exist')
    cy.get('[type="checkbox"]').check()
    cy.wait(2000)
    cy.get('[type="checkbox"]').uncheck()
  })
})