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

  it('show the title of the board column', ()=> {
    cy.get('[data-testid="board-column-title"]')
  })

  it('shows a list of tasks inside column and at least there should be one task', ()=> {
    cy.get('[data-testid=board-column-container]').should('have.length.at.least', 1)
    cy.get('[data-testid=task-item]')
  })

  it('should show task item details on card', ()=> {
    cy.get('[data-testid="task-title"]').should('exist')
    cy.get('[data-testid="task-subtasks"]').should('exist')
  })

  it('should show add new column ui button', ()=> {
   cy.get('[data-testid="add-new-column-ui"]').should('exist') 
  })

  it('shows the details of the task when clicked', ()=> {
    cy.get('[data-testid=task-item]').first().click()
    cy.get('[data-testid=modal-container]').should('exist')
    // cy.get('[data-testid="overlay-task-title"]').should('exist')
    // cy.get('[data-testid="overlay-task-description"]').should('exist')
    // cy.get('[data-testid="overlay-task-status"]').should('exist')
    // cy.get('[data-testid="overlay-subtasks-container"]').should('exist')
  })
})