///<reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {
        beforeEach(() => {
            cy.visit('produtos/')
        });
     it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            //.first() Pega o primeiro elemento da lista
            //.last() Pega o ultimo elemento da lista
            //.eq(2) Pega um elemento aleatório da lista, informando o numero que o produto se encontra na web
            .contains('Abominable Hoodie')
            .click()

            cy.get('#tab-title-description > a').should('contain','Descrição')
});
    })