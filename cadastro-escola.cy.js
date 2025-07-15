const admin = require('firebase-admin');
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

initializeApp({
  credential: applicationDefault()
});

const db = getFirestore();

describe('Cadastro Escola', () => {
  it('deve cadastrar a escola pelo formulário', () => {
    cy.visit('/configuracoes.html');

    cy.get('#schoolName').type('Escola Teste');
    cy.get('#schoolId').type('escola-teste');
    cy.get('#schoolCNPJ').type('12.345.678/0001-99');
    cy.get('#schoolDirector').type('Diretor Teste');
    cy.get('#schoolPhone').type('(34) 99999-9999');
    cy.get('#schoolEmail').type('escola@teste.com');
    cy.get('#schoolInstagram').type('@escolateste');
    cy.get('#schoolSite').type('https://escolateste.com');
    cy.get('#schoolCEP').type('38400-000');
    cy.get('#schoolAddress').type('Rua Exemplo, 123');
    cy.get('#schoolNumber').type('123');
    cy.get('#schoolNeighborhood').type('Centro');
    cy.get('#schoolCity').type('Uberlândia');
    cy.get('#schoolUF').type('MG');

    cy.get('#schoolForm').submit();

    cy.on('window:alert', (txt) => {
      expect(txt).to.contain('Cadastro da escola salvo com sucesso');
    });
  });
});
