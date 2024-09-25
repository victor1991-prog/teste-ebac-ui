///<reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro', () => {
        beforeEach(() => {
            cy.visit('minha-conta/')
        });

        it('Deve completar o cadastro com sucesso', () => {
            //cy.get('#reg_email').type('veve@teste.com.br')
            cy.get('#reg_email').type(faker.internet.email())
            cy.get('#reg_password').type('teste@321')
            cy.get(':nth-child(4) > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('exist')
            cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
            cy.get('#account_first_name').type(faker.person.firstName())
            cy.get('#account_last_name').type(faker.person.lastName())
            cy.wait(5000) ///pausa do cypress antes de executar o próximo comando
            cy.get('.woocommerce-Button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('exist')
            cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain', 'A partir do painel de controle de sua conta, você pode ver suas compras recentes, gerenciar seus endereços de entrega e faturamento, e editar sua senha e detalhes da conta.')
        });


        it('Deve completar o cadastro com sucesso - Usando variáveis', () => {
            //cy.get('#reg_email').type('veve@teste.com.br')

            var nome = faker.person.firstName()
            var email = faker.internet.email(nome)
            var sobrenome = faker.person.lastName()

            cy.get('#reg_email').type(email)
            cy.get('#reg_password').type('teste@321')
            cy.get(':nth-child(4) > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('exist')
            cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
            cy.get('#account_first_name').type(nome)
            cy.get('#account_last_name').type(sobrenome)
            cy.wait(5000) ///pausa do cypress antes de executar o próximo comando
            cy.get('.woocommerce-Button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('exist')
            cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain', 'A partir do painel de controle de sua conta, você pode ver suas compras recentes, gerenciar seus endereços de entrega e faturamento, e editar sua senha e detalhes da conta.')
        });


            });

        