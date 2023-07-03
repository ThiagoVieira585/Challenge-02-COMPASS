# VetClinic

Este projeto trata-se de uma API que gerencia Tutores e seus respectivos pets. 

Essa API também oferece recursos de autenticação com token para garantir a segurança das operações. Além disso é ncessessário ter o MongoDB configurado para armazenar os dados dos tutores e dos pets. 

## Configuração

Certifique-se de ter o Node.js e o MongoDB instalados em seu ambiente de desenvolvimento.

## Instalação

1. Clone este repositório em sua máquina local.

2. Navegue até o diretório raiz do projeto.

3. Instale as dependências do projeto executando o seguinte comando:


## Banco de Dados

1. Certifique-se de que o servidor MongoDB esteja em execução.

2. Abra a aba em seu vsCode **VER** e depois em **Paleta de comandos** procure por MongoDB Concect, Clique em concectar e informe a URL de conexão do MongoDB. Caso necessário, atualize-a de acordo com sua configuração local.

## Execução

1. Após a instalação das dependências, execute o comando a seguir para transpilar o código TypeScript para JavaScript `tsc`:
2. Navegue até o diretório `dist`:
3. Inicie o servidor usando o seguinte comando `nodemon server.js`:
4. O servidor será iniciado e estará pronto para receber solicitações.

## Rotas

As rotas estão definidas no diretório `src/routes` e podem ser acessadas a partir do seguinte URL base: `http://localhost: 17017`.

- **GET /tutors**: Retorna todos os tutores. Requer autenticação.

- **GET /tutors/:id**: Retorna os detalhes de um tutor específico com base no ID.

- **POST /tutors**: Cria um novo tutor.

- **DELETE /tutors/:id**: Exclui um tutor específico com base no ID. Requer autenticação.

- **PUT /tutors/:id**: Atualiza os dados de um tutor específico com base no ID. Requer autenticação.

- **POST /pet/:tutorId**: Cria um novo pet para um tutor específico com base no ID. Requer autenticação.

- **PUT /pet/:petId/tutor/:tutorId**: Atualiza os dados de um pet específico com base nos IDs do pet e do tutor. Requer autenticação.

- **DELETE /pet/:petId/tutor/:tutorId**: Exclui um pet específico com base nos IDs do pet e do tutor. Requer autenticação.

## Contribuição

Qualquer dúvida ou sugestão em relação a este projeto, fique à vontade para entrar em contato comigo. Você pode me encontrar no Instagram: [@thiagovieira585](https://www.instagram.com/thiagovieira585/). Estou disponível para ajudar e discutir qualquer aspecto relacionado a este projeto.

Sua colaboração para melhoria desse projeto é bem vinda!

[![Instagram](https://img.shields.io/badge/Instagram-%40thiagovieira585-orange)](https://www.instagram.com/thiagovieira585/)

Obrigado!
