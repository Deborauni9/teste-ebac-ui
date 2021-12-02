/// <reference types="cypress"/>

   describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
           cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
       });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
        .first()
        .click()
       
    });
    it('Deve adicionar um produto ao carrinho', () => {
        cy.get('[class="product-block grid"]').contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(2)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain.text',2)
        cy.get('.checkout-button').click()
        cy.get('.woocommerce-billing-fields > h3').contains('Detalhes de faturamento')

        

    });

});