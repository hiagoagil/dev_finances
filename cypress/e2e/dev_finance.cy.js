  import { faker } from '@faker-js/faker'
  describe('Dev - finance ', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it('Cadastrando múltiplas entradas', () => {
      for (let i = 0; i < 5; i++) {
        cy.get('#transaction .button').click()
        cy.get('#description').type('teste')
        cy.get('#amount').type('2.00')
        cy.get('#date').type('2022-12-12')
        cy.get('button').click()
      }
      cy.get('#data-table tbody tr').should('have.length', 5)
    })

    it.only('Cadastrando múltiplas saídas', () => {
      for (let i = 0; i < 5; i++) {
        cy.get('#transaction .button').click()
        cy.get('#description').type('teste')
        cy.get('#amount').type('-2.00')
        cy.get('#date').type('2022-12-12')
        cy.get('button').click()
      }
      cy.get('#data-table tbody tr').should('have.length', 5)
    })

    it('Verificando saldo final', () => {
      const ValorEnrada = ('10.00')
      const ValorSaida = ('-8.00')
      cy.get('#transaction .button').click()
      cy.get('#description').type('teste')
      cy.get('#amount').type(ValorEnrada)
      cy.get('#date').type('2022-12-12')
      cy.get('button').click()

      cy.get('#transaction .button').click()
      cy.get('#description').type('teste')
      cy.get('#amount').type(ValorSaida)
      cy.get('#date').type('2022-12-12')
      cy.get('button').click()

  
      const total = 'R$2,00'
      cy.get('.total')
        .invoke('text')
        .then((text) => {
          const textoLimpo = text.replace(/\s+/g, '')

          expect(textoLimpo).to.contain(total)
        })
    })
    it('Cadastrando entradas e saídas e as removendo', () => {

      var products = [
        faker.commerce.product(), 
        faker.commerce.productMaterial() 
      ]

      const add = (vazio) => {
        cy.get('#transaction .button').click()
        cy.get('#description').type(vazio)
        cy.get('#amount').type('100')
        cy.get('#date').type('2022-12-12')
        cy.get('button').click()
        cy.contains(vazio)
        .parents()
        .find('img[onclick*=remove]')
        .click()
      }
        products.forEach(add)

          cy.get('.description').should('not.exist')
    })
  })