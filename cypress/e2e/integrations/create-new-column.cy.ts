describe('Create new board column', ()=> {
  beforeEach(()=> {
    cy.visit('/')
  })
  it('should show modal with add new column form, and create new column', ()=> {
    cy.get('[data-testid="add-new-column-ui"]').click()
    cy.get('[data-testid="modal-container"]').should('exist')
    cy.get('[data-testid="add-column-form"]').should('exist')
    cy.get('[data-testid="add-column-input"]').type('Deployed to QA')
    cy.get('[data-testid="add-column-confirm"]').click()
    // To do - Add to DB
  })
})