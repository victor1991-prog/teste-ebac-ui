///<reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json') //neste caso foi incluso a pasta perfil.json em require (que esta na pasta fixture) no script const para que o comando criado em "perfil.json" seja executado. O ".." é para acessar as pastas até encontrar a Fixture//

describe('Funcionalidade: Login', () => {

//Antes de executar cada teste, o before each vai visitar o link, sem a necessidade de informar o cy.visit em cada um//
    beforeEach(() => {
        cy.visit('minha-conta')
    });
    
    
it('Deve fazer login com sucesso', () => {
//informar usuario//
cy.get('#username').type('victor.teste@teste.com.br')
//informar senha//
cy.get('#password').type('teste1991')
//botão login//
cy.get('.woocommerce-form > .button').click()
//resultado esperado//
cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, victor.teste (não é victor.teste? Sair)')
})

it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
//informar usuario//
cy.get('#username').type('fabio@teste.com.br')
//informar senha//
cy.get('#password').type('teste1991')
//botão login//
cy.get('.woocommerce-form > .button').click()
cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário')
});

it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
    //informar usuario//
    cy.get('#username').type('victor.teste@teste.com.br')
    //informar senha//
    cy.get('#password').type('teste00')
    //botão login//
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail victor.teste@teste.com.br está incorreta. Perdeu a senha?')
    cy.get('.woocommerce-error').should('exist')
});

it ('Deve fazer login com sucesso - Usando massa de dados', () => {
    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
    
    });

    it('Deve fazer login com sucesso - Usando massa de Fixture', () => {
        cy.fixture('perfil').then( dados => {
            cy.get('#username').type(dados.usuario , { log:false}) //comando false utilizado para que dados sensíveis não sejam exibibidos no Cypress ao rodar um teste//
            cy.get('#password').type(dados.senha , { log:false })
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

        })
        
        });

        it.only('Deve fazer login com sucesso - Usando comandos customizados', () => {
            cy.login('victor.teste@teste.com.br', 'teste1991'  )
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

        });

})


