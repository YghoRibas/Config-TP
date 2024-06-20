# API de Gerenciamento de Produtos e Aplicação Mobile

## Introdução
Este projeto consiste no desenvolvimento de uma API para gerenciar produtos de uma loja e uma aplicação mobile que interage com essa API. A API foi criada para otimizar os processos internos, simplificar a gestão de dados e aprimorar a qualidade do ambiente de vendas. A aplicação mobile, desenvolvida em Swift UIKit, demonstra algumas funcionalidades da API e oferece uma interface amigável para os usuários.

## Arquitetura
A arquitetura do sistema é baseada em uma API RESTful, desenvolvida em Java utilizando Spring Boot. A API expõe endpoints para as operações CRUD de gerenciamento de pacientes, bem como para cálculos específicos relacionados aos dados dos produtos. A aplicação mobile utiliza Swift UIKit para fornecer uma interface interativa que permite aos usuários visualizar e gerenciar informações dos pacientes.


## Separação de Tarefas

### Frontend Mobile
- Desenvolvimento da interface de usuário utilizando Swift UIKit.
- Implementação de funcionalidades para visualização, adição e remoção de produtos.
- Integração com a API para realizar operações CRUD.
- Testes e validação das funcionalidades no simulador.

### API
- Criação da API RESTful em Java com Spring Boot.
- Implementação dos endpoints para gerenciamento de pacientes (CRUD).
- Testes unitários e de integração utilizando JUnit e RestAssured.

### Integração de CI/CD no GitHub Actions
- Configuração do pipeline de CI/CD no GitHub Actions.
- Automação do build e testes da API em cada push.
- Deploy contínuo da API em um ambiente de staging para validação.
- Monitoramento e notificações de falhas no pipeline.

### Criação de Contêiner no Docker para Produção
- Escrita do Dockerfile para a API.
- Construção da imagem Docker da API.
- Criação do Docker Compose para orquestração dos contêineres.


## Instruções de Uso

### Configuração do Ambiente
1. Certifique-se de ter o JDK 21+ instalado.
2. Instale o Maven.
3. Clone o repositório:

git clone <URL_DO_REPOSITORIO>
cd <DIRETORIO_DO_PROJETO>
mvn spring-boot


### Testes
mvn test


## Tecnologias Utilizadas
- Java
- Spring Boot
- Maven
- JUnit
- RestAssured
- Docker
- Swift UIKit (para a aplicação mobile)

## Testes
O projeto inclui testes unitários, de integração e de aceitação para garantir a qualidade do código. Os testes podem ser executados com o comando:

mvn test


## Implantação
Para implantar a API via Docker em um ambiente de produção, siga os passos:

1. Certifique-se de ter o Docker instalado.
2. Construa a imagem Docker:

docker build -t api-gerenciamento-pacientes.

3. Execute o contêiner:

docker run -p 8080:8080 api-gerenciamento-pacientes


## Requisitos do Sistema
- Adicionar produto de diferentes categorias;
- Remover produto;

## Aplicação Mobile

### Funcionalidades
A aplicação mobile foi desenvolvida em Swift UIKit e oferece as seguintes funcionalidades:
- Visualização da lista de produtos.
- Adição de novos produtos.
- Remoção de produtos.

### Instalação e Configuração
1. Certifique-se de ter o Xcode instalado.
2. Clone o repositório:

git clone <URL_DO_REPOSITORIO>
cd <DIRETORIO_DO_PROJETO_MOBILE>

3. Abra o projeto no Xcode e execute-o em um simulador ou dispositivo físico.

## Contribuição
Contribuições são bem-vindas! Para contribuir, siga os passos:

1. Fork o repositório.
2. Crie uma nova branch:

git checkout -b minha-feature

3. Faça as alterações e commit:

git commit -m "Minha nova feature"

4. Envie para o repositório remoto:
git push origin minha-feature

5. Crie um Pull Request.

 # Documentação da API

## Endpoints

### Usuários

#### Registro de Usuário
- **Rota:** /user/register
- **Método:** POST
- **Descrição:** Registra um novo usuário.
- **Parâmetros do Corpo:**
    - `name` (String): Nome do usuário
    - `password` (String): Senha do usuário
    - `admin` (Boolean): Indicador se o usuário é administrador
    - `mail` (String): E-mail do usuário
- **Respostas:**
    - `201`: Usuário criado com sucesso
    - `400`: Usuário já existe
    - `422`: E-mail é obrigatório
    - `500`: Erro interno do servidor
    
#### Login de Usuário
- **Rota:** /user/login
- **Método:** POST
- **Descrição:** Realiza o login de um usuário.
- **Parâmetros do Corpo:**
    - `mail` (String): E-mail do usuário
    - `password` (String): Senha do usuário
- **Respostas:**
    - `201`: Login bem-sucedido
    - `404`: Usuário ou senha inválidos
    - `500`: Erro interno do servidor

#### Obter Todos os Usuários
- **Rota:** /user/getAllUsers
- **Método:** GET
- **Descrição:** Retorna todos os usuários.
- **Respostas:**
    - `200`: Lista de usuários
    - `500`: Erro interno do servidor

#### Obter Usuário por ID
- **Rota:** /user/:id
- **Método:** GET
- **Descrição:** Retorna um usuário pelo ID.
- **Parâmetros da URL:**
    - `id` (String): ID do usuário
- **Respostas:**
    - `200`: Usuário encontrado
    - `422`: Usuário não encontrado
    - `500`: Erro interno do servidor

#### Atualizar Usuário
- **Rota:** /user/updateUser
- **Método:** POST
- **Descrição:** Atualiza um usuário.
- **Parâmetros do Corpo:**
    - `mail` (String): E-mail do usuário
    - `admin` (Boolean): Indicador se o usuário é administrador
    - `name` (String): Nome do usuário
    - `password` (String): Senha do usuário
- **Respostas:**
    - `200`: Usuário atualizado
    - `404`: Usuário não encontrado
    - `422`: Usuário não encontrado
    - `500`: Erro interno do servidor

#### Deletar Usuário
- **Rota:** /user/deleteUser
- **Método:** DELETE
- **Descrição:** Deleta um usuário.
- **Parâmetros da URL:**
    - `id` (String): ID do usuário
- **Respostas:**
    - `200`: Usuário removido
    - `422`: Usuário não encontrado
    - `500`: Erro interno do servidor

### Produtos

#### Criar Produto
- **Rota:** /product/create
- **Método:** POST
- **Descrição:** Cria um novo produto.
- **Parâmetros do Corpo:**
    - `clientId` (String): ID do cliente
    - `price` (Number): Preço do produto
    - `description` (String): Descrição do produto
    - `image` (String): URL da imagem do produto
- **Respostas:**
    - `201`: Produto criado com sucesso
    - `422`: Usuário é obrigatório
    - `500`: Erro interno do servidor

#### Obter Produtos por Cliente
- **Rota:** /product/getProductByClient
- **Método:** GET
- **Descrição:** Retorna produtos por cliente.
- **Parâmetros da Query:**
    - `clientId` (String): ID do cliente
- **Respostas:**
    - `200`: Lista de produtos
    - `422`: Cliente sem produtos cadastrados
    - `500`: Erro interno do servidor

#### Obter Todos os Produtos
- **Rota:** /product/getAllproducts
- **Método:** GET
- **Descrição:** Retorna todos os produtos.
- **Respostas:**
    - `200`: Lista de produtos
    - `422`: Nenhum produto cadastrado
    - `500`: Erro interno do servidor

#### Obter Produto Específico
- **Rota:** /product/getOneDemands
- **Método:** GET
- **Descrição:** Retorna um produto específico.
- **Parâmetros da Query:**
    - `clientId` (String): ID do cliente
    - `id` (String): ID do produto
- **Respostas:**
    - `200`: Produto encontrado
    - `422`: Produto inexistente
    - `500`: Erro interno do servidor

#### Deletar Produto
- **Rota:** /product/delete
- **Método:** DELETE
- **Descrição:** Deleta um produto.
- **Parâmetros da Query:**
    - `clientId` (String): ID do cliente
    - `id` (String): ID do produto
- **Respostas:**
    - `200`: Produto removido
    - `422`: Produto inexistente
    - `500`: Erro interno do servidor

#### Atualizar Produto
- **Rota:** /product/:id
- **Método:** PATCH
- **Descrição:** Atualiza um produto.
- **Parâmetros do Corpo:**
    - `id` (String): ID do produto
    - `clientId` (String): ID do cliente
    - `price` (Number): Preço do produto
- **Respostas:**
    - `200`: Produto atualizado
    - `422`: Produto não encontrado
    - `500`: Erro interno do servidor


## Licença
Este projeto não possui um licenciamento específico. Para mais informações sobre os termos de uso e distribuição do software, por favor, entre em contato com o autor.

