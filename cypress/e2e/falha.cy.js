//const {share}  = require("../e2e/share.cy");
function getDateString(){
   return new Date().getTime()
}

describe('Rodando Testes', () => {
  afterEach(function () {
    if (this.currentTest.state === 'failed'){
      const currentmilis = getDateString()
      cy.screenshot(`scfail${currentmilis}`);
    }
  })

  it('Falha forcada', () => {
    const date = new Date()
    date.getTime()
    cy.visit('https://webmani-test.manipulae.com.br/cotar')
    cy.get('#field-\\:r1\\:-label').selectFile('cypress\\fixtures\\receita-img1.jpg', { action: 'drag-drop'})
    cy.get('#field-\\:r2\\:').type("71050030")
    cy.get('#field-\\:r4\\:').type(`teste${getDateString()}@qa.com`)
    cy.get('#field-\\:r5\\:').type("Lucas Rocha de Castro")
    cy.get('#field-\\:r6\\:').type("61995327191")
    cy.get('.chakra-checkbox__control').click()
    cy.contains('button' , "Enviar Receita").click()
    cy.wait(5000);
    cy.contains("falha aqui" ,  { timeout: 5000 }).should('be.visible')
  })
})

describe('Mandar fotos sharepoint', () => {
  after(() => {
    cy.task('rmFiles')
  })
  it('Upload do sharepoint', () => {
    cy.task('getFiles').then(files => {
      if (files.length > 0) {
        cy.visit('https://manipulaecombr-my.sharepoint.com/:f:/g/personal/matheus_marinho_manipulae_com_br/Eklx5HErM45OsGgxOLHB3Q0BxZZSzVBzW0FvUKY0EoVajQ?e=XyoPxV');
        cy.wait(5000);
        for(const file of files){ 
          cy.get('[data-automationid="uploadCommand"]').click()
          cy.get('[data-automationid="uploadFileCommand"]').click()
          cy.wait(2000);
          cy.get('input[type="file"]').selectFile(`cypress/screenshots/${file}`, {force: true})
          cy.wait(5000);
        }
      }
    })
  })
})

    

