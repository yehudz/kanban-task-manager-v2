describe('Layout Testing', () => {
  beforeEach(()=> {
    cy.visit('/')
    cy.viewport(1280,	800)
  })

  it('needs to have left and right main containers', ()=> {
    cy.get('[data-testid=left-container]').should('exist')
    cy.get('[data-testid=right-container]').should('exist')
  })

  it('checks if topbar exists', () => {
    cy.get('[data-testid=top-bar]').should('exist')
  })

  it('checks if there is a columns cointainer', ()=> {
    cy.get('[data-testid=columns-container]').should('exist')
  })

  it('checks if there is a board title', ()=> {
    cy.get('[data-testid=board-title]').invoke('text').should('have.length.gt', 0)
  })

  it('checks if there is a logo container', ()=> {
    cy.get('[data-testid=logo-container]').should('not.exist')
  })

  it('checks if there is an add new task button', ()=> {
    cy.get('[data-testid=add-new-task-button]').should('exist')
  })

  it('checks if there is an options button for column', ()=> {
    cy.get('[data-testid=column-options-drop-down]').should('exist')
  })

  it('should have a right sidebar with logo, columns list, theme toggle, toggle sidebar', ()=> {
    cy.get('[data-testid=left-sidebar]').should('exist')
    cy.get('[data-testid=left-sidebar-logo]').should('exist')
    cy.get('[data-testid=columns-list-menu]').should('exist')
    cy.get('[data-testid="theme-toggle-container"]').should('exist')
    cy.get('[data-testid=toggle-sidebar-button]').should('exist')
  })

  it('needs sidebar to contain list with boards', ()=> {
    cy.get('[data-testid=board-list-items]').should('have.length.at.least', 1)
    cy.get('[data-testid=board-list-item]').should('exist')
    cy.get('[data-testid=board-list-item]').should('exist')
  })

  it('should toggle dark and light theme', ()=> {
    cy.get('[data-testid="toggle-theme-button"]').click()
    cy.wait(2000)
    cy.get('[data-testid="toggle-theme-button"]').click()
  })

  it('should toggle sidebar close and open', ()=> {
    cy.get('[data-testid="left-container"]').should('have.class', 'sidebarOpen')
    cy.wait(1000)
    cy.get('[data-testid=toggle-sidebar-button]').click()
    cy.get('[data-testid="left-container"]').should('have.not.class', 'sidebarOpen')
    cy.wait(500)
    cy.get('[data-testid="show-sidebar"]').click()
  })
})

export default {}