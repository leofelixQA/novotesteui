import { faker } from '@faker-js/faker';

beforeEach(() => {
 cy.visit("register.html")   
});

describe('funcionalidade: cadastro', () => {

   it.only('deve fazer cadastro com sucesso, usando faker', () => {
    let email = faker.internet.email()
    let nome = faker.person.fullName()
    let telefone = faker.phone.number()
    cy.get('#name').type(nome)
    cy.get('#email').type(email)
    cy.get('#phone').type(telefone)
    cy.get('#password').type("teste123")
    cy.get('#confirm-password').type("teste123")
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()
    cy.url().should("include","dashboard")
    cy.get('#user-name').should("contain",nome)

   });
});