# DOTGROUP

Este projeto utiliza o framework [Cypress](https://www.cypress.io/) para automação de testes end-to-end.

## Estrutura do Projeto

- **cypress/e2e/**: Contém os testes automatizados.
- **cypress/fixtures/**: Contém dados de exemplo usados nos testes.
- **cypress/support/**: Contém comandos customizados e configurações globais.
- **allure-report/**: Relatórios gerados pelo Allure.
- **allure-results/**: Resultados intermediários para geração de relatórios.

## Pré-requisitos

- Node.js instalado.
- Gerenciador de pacotes `npm` ou `yarn`.
- Instalação do Cypress (versão 14 ou superior).
- Instalação do plugin Allure Reports. (versão 2.33 ou superior).

## Instalação


1. Clone o repositório:
   ```sh
   git clone [<url-do-repositorio>](https://github.com/andre-schikovski/testDotGroup.git)
   cd [<nome-do-repositorio>](https://github.com/andre-schikovski/testDotGroup.git)
   ```

2. Instalação do Cypress:
```sh
npm install cypress --save-dev
```
a) Para abrir o Cypress pela primeira vez
```sh
npx cypress open
```
b) Caso deseje rodar o cypress e os testes em modo oculto
```sh
npx cypress run
```
   
3. Instalação e configuração do Allure Reports.
   ```sh
   npm install --save-dev @shelex/cypress-allure-plugin
   npm install -g allure-commandline --save-dev
   ```
a) No arquivo cypress.config.js (Cypress v10+):
```sh
const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
 ```
b) No cypress/support/e2e.js:
```sh
import '@shelex/cypress-allure-plugin';
```
c) Ative o Allure no script de execução
No seu package.json, adicione um script para executar com a geração de relatórios:
```sh
"scripts": {
  "test:e2e": "cypress run --spec cypress/e2e/e2e.cy.js --env allure=true && allure generate allure-results --clean -o allure-report && allure open"
```
