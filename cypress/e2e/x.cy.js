describe('teste', () => {
    it('Editar Áreas de Armazenamento', () => {
      cy.intercept('GET', 'api/v1/StorageArea/*').as('armazenamento');
       cy.visit('https://qa.atlantex.atlanteti.com');
      cy.contains('Cadastros').click();
      cy.contains('Áreas de Armazenamento').click();
      cy.wait('@armazenamento')
      cy.get('tbody').find('[data-cy="tableList-table-body-edit"]').first().trigger('mouseover').click()
 
 
       
  
      
    });
  });
  
