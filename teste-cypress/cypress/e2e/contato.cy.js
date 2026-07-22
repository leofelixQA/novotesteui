beforeEach(() => {
cy.visit("index.html")
});

describe('funcionalidade: contato', () => {
  it('deve preencher formulario com sucesso', () => {
  cy.get('[name="name"]').type("leo")
  cy.get('[name="email"]').type("teste@teste.com")
  cy.get('[name="subject"]').select("Sugestões")
  cy.get('[name="message"]').type("qualquer mensagem")
  cy.get('#btn-submit').click()
  cy.contains("Contato enviado com sucesso").should("exist")
  })
})