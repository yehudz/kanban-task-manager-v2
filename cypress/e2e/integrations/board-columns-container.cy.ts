describe('Board Columns Container', ()=> {
  beforeEach(()=> {
    cy.visit('/')
    cy.viewport(1280,	800)
  })

  it('shows the empty screen if not columns are added', ()=> {
    cy.get('[data-testid="columns-empty-screen"]')
  })

  it('should at least have one column in the board', ()=> {
    cy.get('[data-testid=columns-container]').should('exist')
    cy.get('[data-testid=columns-container]').should('have.length.at.least', 1)
    cy.get('[data-testid=board-column-container]').should('exist')
  })

  it('shows a list of tasks inside column and at least there should be one task', ()=> {
    cy.get('[data-testid=board-column-container]').should('have.length.at.least', 1)
    cy.get('[data-testid=task-item]')
  })

  it('shows the details of the task when clicked', ()=> {
    cy.get('[data-testid=task-item]').click()
    cy.get('[data-testid=task-details-container]').should('exist')
  })
})