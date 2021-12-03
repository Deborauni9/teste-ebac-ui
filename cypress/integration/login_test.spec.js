/// <reference types = "cypress"/>
var faker = require('faker')

context('Funcionalidade Login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('.woocommerce-form > :nth-child(1) > label').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain.text', 'Olá, aluno_ebac (não é aluno_ebac? Sair)')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

    
    });
    it('Deve exibir mensagem de erro ao digitar usuario invalido', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('.woocommerce-form > :nth-child(1) > label').type('email@errado.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain.text', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    });
    it.only('Deve completar cadastro', () => {
        
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('teste@teste.com')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain.text','A partir do painel de controle de sua conta, você pode ver suas compras recentes, gerenciar seus endereços de entrega e faturamento, e editar sua senha e detalhes da conta.')

    });
});