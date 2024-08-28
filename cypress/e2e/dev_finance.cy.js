import { faker } from '@faker-js/faker'
describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Cadastrando entradas', () => {
    for (let i = 0; i < 5; i++) {
      cy.get('#transaction .button').click()
      cy.get('#description').type('teste')
      cy.get('#amount').type('2.00')
      cy.get('#date').type('2022-12-12')
      cy.get('button').click()
    }
    cy.get('#data-table tbody tr').should('have.length', 5)
  })

  it('Cadastrando saídas', () => {
    for (let i = 0; i < 5; i++) {
      cy.get('#transaction .button').click()
      cy.get('#description').type('teste')
      cy.get('#amount').type('-2.00')
      cy.get('#date').type('2022-12-12')
      cy.get('button').click()
    }
    cy.get('#data-table tbody tr').should('have.length', 5)
  })

  it('Verificando se o  calculo final de entrada e saída está de acordo ', () => {
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
  it.only('Removendo entradas e saídas', () => {

    var products = [
      "100",
     "200"
    ]

    const add = (vazio) => {
      cy.get('#transaction .button').click()
      cy.get('#description').type(vazio)
      cy.get('#amount').type(vazio)
      cy.get('#date').type('2022-12-12')
      cy.get('button').click()
    }

    products.forEach(add)

    //   for (let i =0 ;i <2; i ++) {

    //   cy.get('#transaction .button').click()
    //   cy.get('#description').type()
    //   cy.get('#amount').type('100')
    //   cy.get('#date').type('2022-12-12')
    //   cy.get('button').click()
    // }

  })


  it('should filter by each type and verify all items', () => {
    const tipos = ['Adequação', 'Implantação', 'Massiva', 'Preventiva', 'Sobressalentes', 'Casa Cliente', 'Alívio']

    tipos.forEach((tipo) => {
      cy.dataTest('consult.type-select').click();
      cy.contains('.ant-select-item-option-content', tipo).click();
      cy.wait('@getPurchasePlan');

      cy.dataTest('main-table-unidade-tag')
        .each(($el) => {
          cy.wrap($el).should('have.text', tipo);
        });
    });
  });

})