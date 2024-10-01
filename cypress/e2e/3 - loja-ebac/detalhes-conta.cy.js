/// <reference types="cypress" />

describe('Funcionalidade: Detalhes da conta', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta/edit-account/')
        cy.fixture('perfil').then(login =>{
            cy.login(login.usuario, login.senha)
        })
    });

    it('Deve completar detalhes da conta com sucesso - automatizado', () => {
        cy.detalhesConta('Victor', 'Machado', 'Veve1991')
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain', 'A partir do painel de controle de sua conta, você pode ver suas compras recentes, gerenciar seus endereços de entrega e faturamento, e editar sua senha e detalhes da conta.')
    });
});

/*Neste exemplo o cypress vai visitar a loja Ebac em detalhes da conta, e para acessar este campo é necessário logar primeiro.
Sendo assim ser]ao utilizados os comandos: 
- cy.visit (como o site loja ebac já está cadastrado em cypress.config.js, basta incluir o campo que deseja acessar),
- cy.fixture: pois já cadastramos um login e senha padrão no fixture (pasta perfil.json);
e após realizar o login será utilizado o comando automatizado cy.detalhesConta */