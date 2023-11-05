// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// const uploadFile = require('cypress-upload-file');

// uploadFile({ url: 'https://manipulaecombr-my.sharepoint.com/:f:/g/personal/matheus_marinho_manipulae_com_br/Eklx5HErM45OsGgxOLHB3Q0BxZZSzVBzW0FvUKY0EoVajQ?e=XyoPxV', filePath: 'cypress\\screenshots' });


// Cypress.Commands.add('screenshot', () => {
//     // Use cy.screenshot() com um nome de arquivo personalizado ou deixe-o em branco para o nome padrão
//     cy.screenshot({ capture: 'runner' });
//   });
  
  // Exporte o evento personalizado
//   Cypress.on('test:after:run', (test, runnable) => {
//     if (test.state === 'failed') {
//       cy.screenshot("\\cypress\\fixtures");

//     }
//   });
  import'cypress-file-upload'