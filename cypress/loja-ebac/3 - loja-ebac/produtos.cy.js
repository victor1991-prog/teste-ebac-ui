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
 it('Deve buscar um produto com sucesso', () => {
    let produto = 'Aether Gym Pant'
    produtosPage.buscarProduto(produto)
    cy.get('.product_title').should('contain', produto)
 });

 it('Deve visitar a página do produto', () => {
    produtosPage.visitarProduto('Aether Gym Pant')
    cy.get('.product_title').should('contain', 'Aether Gym Pant')
 });

 it('Deve adicionar produto ao carrinho', () => {
   let qtd = 7
    produtosPage.buscarProduto('Ingrid Running Jacket')
    produtosPage.addProdutoCarrinho('M', 'Orange', 5)
    //cy.get('.woocommerce-message').should('contain','5 x “Ingrid Running Jacket” foram adicionados no seu carrinho.')
    //cy.get('.woocommerce-message').should('contain', qtd + ' x “Ingrid Running Jacket” foram adicionados no seu carrinho.')
    cy.get('.woocommerce-message').should('exist')
   });


   it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
       cy.fixture('produtos').then(dados => {
         
         produtosPage.buscarProduto(dados[1].nomeProduto)
         produtosPage.addProdutoCarrinho(
            dados[1].tamanho,
            dados[1].cor,
            dados[1].quantidade)
         cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)

       })
      
       
      });

    });