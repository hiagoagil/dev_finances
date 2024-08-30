## DEV-FINANCE - Explorando a Lógica de Programação Básica

O objetivo principal desta suíte de testes automatizados é demonstrar como a lógica de programação básica pode ser utilizada de forma eficaz para otimizar e automatizar tarefas que seriam trabalhadas de forma manual. 

### Dev-Finance
O Dev-Finance é uma funcionalidade que permite aos usuários adicionar transações financeiras, incluindo entradas e saídas, e, posteriormente, verificar o saldo final. Par 

### Pré-requisitos
- **Node.js** 
- **Cypress** 
- **Faker.js** 

### Instalação e Configuração
1. Clone este repositório:

   ```bash
   git clone https://github.com/hiagoagil/dev_finances.git
   ```
2. Instale as depencias:
    ```
    npm install
    ```
3. Visualizar o teste no Cypress:
    ```
    npx cypress open
    ```
4. Visualizar o teste modo headles:
    ```
    npx cypress run
    ```
   
### Teste Automatizado e casos de testes
Esta automação explora como a lógica de programação básica pode ser aplicada para realizar tarefas que o usuário faria manualmente, de forma a otimizar o processo. A automação foi desenvolvida para adicionar múltiplas transações, verificar confiabilidade do saldo final e percorrer uma lista de produtos. 

*   Caso 1: Cadastrando múltiplas entradas - Realizado o cadastro de valores positivos, por se tratarem de entradas financeiras, utilizando um loop for para repetir a operação várias vezes, simulando que o usuário faria isso diversas vezes. 

*   Caso 2: Cadastrando múltiplas saídas - Realizado o cadastro de saídas financeiras, com valores negativos, utilizando a mesma abordagem do loop for, simulando que o usuário faria isso diversas vezes. 

*   Caso 3: Verificando o saldo final - A partir do armazenamento dos valores em variáveis, foi verificada a adequação do cálculo em relação à proposta da aplicação. Utilizado a função replace para remover qualquer espaço ou caractere invisível na string do saldo retornado pela aplicação antes de fazer a comparação.

*   Caso 4: Cadastrando e removendo entradas - Cadastrando e removendo entradas financeiras, percorrendo um array utilizando o método forEach. Simulando entradas diferentes, recebidas de uma lista e executando a adição e remoção contínua das entradas e saídas. 

##  Contato 📧:
[Linkedin](https://www.linkedin.com/in/hiago-gil-b94169166)  / Hiago Gil

Gmail: hiagoqagil@gmail.com 