///<reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
        beforeEach(() => {
           // cy.visit('produtos')
            produtosPage.visitarUrl()
        });
     
     
        it('Deve selecionar um produto da lista', () => {
            produtosPage.buscarProdutoLista('Abominable Hoodie')
       /* cy.get('.product-block')
            .first() Pega o primeiro elemento da lista
            //.last() Pega o ultimo elemento da lista
            //.eq(2) Pega um elemento aleatório da lista, informando o numero que o produto se encontra na web
            //.contains('Abominable Hoodie')
            .click()*/

            cy.get('#tab-title-description > a').should('contain','Descrição')
});
 it.only('Deve buscar um produto com sucesso', () => {
    let produto = 'Aether Gym Pant'
    produtosPage.buscarProduto(produto)
    cy.get('.product_title').should('contain', produto)
 });

 it('Deve visitar a página do produto', () => {
    
 });

 it('Deve adicionar produto ao carrinho', () => {
    
 });

    });