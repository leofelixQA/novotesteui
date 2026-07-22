import { faker } from '@faker-js/faker';

beforeEach(() => {
cy.visit("index.html")
});

describe('funcionalidade: contato', () => {
  it('deve preencher formulario com sucesso', () => {
    let email = `teste${Date.now()}@teste`
  cy.get('[name="name"]').type("leo")
  cy.get('[name="email"]').type(email)
  cy.get('[name="subject"]').select("Sugestões")
  cy.get('[name="message"]').type("qualquer mensagem")
  cy.get('#btn-submit').click()
  cy.contains("Contato enviado com sucesso").should("exist")
  })

  it('deve validar erro ao enviar sem preencher o nome', () => {
  //cy.get('[name="name"]').type("leo")
  cy.get('[name="email"]').type("teste@teste.com")
  cy.get('[name="subject"]').select("Sugestões")
  cy.get('[name="message"]').type("qualquer mensagem")
  cy.get('#btn-submit').click()
  cy.get('#alert-container').should("contain", "Por favor, preencha o campo Nome")
  })

  it('deve validar erro ao enviar sem preencher o e-mail', () => {
  cy.get('[name="name"]').type("leo")
  //cy.get('[name="email"]').type("teste@teste.com")
  cy.get('[name="subject"]').select("Sugestões")
  cy.get('[name="message"]').type("qualquer mensagem")
  cy.get('#btn-submit').click()
  cy.get('#alert-container').should("contain", "Por favor, preencha o campo E-mail")
  });

  it('deve validar erro ao enviar sem selecionar o assunto', () => {
  cy.get('[name="name"]').type("leo")
  cy.get('[name="email"]').type("teste@teste.com")
  //cy.get('[name="subject"]').select("Sugestões")
  cy.get('[name="message"]').type("qualquer mensagem")
  cy.get('#btn-submit').click()
  cy.get('#alert-container').should("contain", "Por favor, selecione o Assunto")
  });

  it('deve validar erro ao enviar sem escrever a mensagem', () => {
  cy.get('[name="name"]').type("leo")
  cy.get('[name="email"]').type("teste@teste.com")
  cy.get('[name="subject"]').select("Sugestões")
  //cy.get('[name="message"]').type("qualquer mensagem")
  cy.get('#btn-submit').click()
  cy.get('#alert-container').should("contain", "Por favor, escreva sua Mensagem")
  });
})