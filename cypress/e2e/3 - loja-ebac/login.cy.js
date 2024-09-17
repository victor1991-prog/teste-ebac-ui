///<reference types="cypress"/>

describe('Funcionalidade: Login', () => {
it('Deve fazer login com sucesso', () => {
cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
cy.get('#username').type('victor.teste@teste.com.br')
cy.get('#password').type('teste1991')
cy.get('.woocommerce-form > .button').click()
//resultado esperaro//
cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, victor.teste (não é victor.teste? Sair)')


})
})