## Gerenciamento de Loja de Produtos e Aplicação Mobile
Este projeto consiste no desenvolvimento de um sistema para gerenciar uma loja de produtos e
uma aplicação mobile que interage com esse sistema. O objetivo é otimizar os processos internos
da loja, simplificar a gestão de inventário e aprimorar a experiência do cliente. A aplicação mobile,
desenvolvida em Swift UIKit, demonstra algumas funcionalidades do sistema e oferece uma
interface amigável para os usuários.

## Gerenciamento de Loja de Produtos e Aplicação Mobile
# Requisitos do Sistema
- Gerenciar informações de produtos, incluindo nome, descrição, categoria, preço, quantidade em
estoque e SKU.
- Oferecer funcionalidades para adicionar, atualizar, remover e listar produtos.
- Validar dados de entrada para garantir a integridade do inventário.
- Retornar informações detalhadas dos produtos.

# Arquitetura
Gerenciamento de Loja de Produtos e Aplicação Mobile
A arquitetura do sistema é baseada em uma aplicação web, desenvolvida em Java utilizando Spring
Boot. A aplicação expõe funcionalidades para as operações CRUD de gerenciamento de produtos,
bem como para cálculos específicos relacionados aos dados dos produtos. A aplicação mobile
utiliza Swift UIKit para fornecer uma interface interativa que permite aos usuários visualizar e
gerenciar informações dos produtos.

## Gerenciamento de Loja de Produtos e Aplicação Mobile
Separação de Tarefas
 Frontend Mobile
- Desenvolvimento da interface de usuário utilizando Swift UIKit.
- Implementação de funcionalidades para visualização, adição e remoção de produtos.
- Integração com o sistema para realizar operações CRUD.
- Testes e validação das funcionalidades no simulador.
 API
- (Este tópico está vazio e pode ser preenchido conforme necessário)
  Integração de CI/CD no GitHub Actions
- Configuração do pipeline de CI/CD no GitHub Actions.
- Automação do build e testes da aplicação em cada push.
- Deploy contínuo da aplicação em um ambiente de staging para validação.
- Monitoramento e notificações de falhas no pipeline.
  Criação de Contêiner no Docker para Produção
- Escrita do Dockerfile para a aplicação.
- Construção da imagem Docker da aplicação.
- Criação do Docker Compose para orquestração dos contêineres.

# Gerenciamento de Loja de Produtos e Aplicação Mobile
Funcionalidades da Aplicação
- Visualização da lista de produtos.
- Detalhes de um produto específico.
- Adição de novos produtos.
- Atualização dos dados de produtos existentes.
- Remoção de produtos do sistema.

Instruções de Uso
Gerenciamento de Loja de Produtos e Aplicação Mobile
## Configuração do Ambiente
1. Certifique-se de ter o JDK 21+ instalado.
2. Instale o Maven.
3. Clone o repositório:
```
git clone <URL_DO_REPOSITORIO>
cd <DIRETORIO_DO_PROJETO>
mvn spring-boot:run
```
## Testes
```bash
mvn test
```

# Tecnologias Utilizadas
- Java
- Spring Boot
- Maven
- JUnit
- RestAssured
- Docker
- Swift UIKit (para a aplicação mobile)

# Testes
O projeto inclui testes unitários, de integração e de aceitação para garantir a qualidade do código.
Os testes podem ser executados com o comando:
```bash
mvn test
```

Implantação
Gerenciamento de Loja de Produtos e Aplicação Mobile
Para implantar a aplicação via Docker em um ambiente de produção, siga os passos:
1. Certifique-se de ter o Docker instalado.
2. Construa a imagem Docker:
```bash
docker build -t loja-gerenciamento-produtos .
```
3. Execute o contêiner:
```bash
docker run -p 8080:8080 loja-gerenciamento-produtos
```

Aplicação Mobile
Gerenciamento de Loja de Produtos e Aplicação Mobile
# Funcionalidades
A aplicação mobile foi desenvolvida em Swift UIKit e oferece as seguintes funcionalidades:
- Visualização da lista de produtos.
- Detalhes de um produto específico.
- Adição de novos produtos.
- Atualização dos dados de produtos existentes.
- Remoção de produtos.
# Instalação e Configuração
1. Certifique-se de ter o Xcode instalado.
2. Clone o repositório:
```bash
git clone <URL_DO_REPOSITORIO>
cd <DIRETORIO_DO_PROJETO_MOBILE>
```
3. Abra o projeto no Xcode e execute-o em um simulador ou dispositivo físico.

Contribuição
Gerenciamento de Loja de Produtos e Aplicação Mobile
Contribuições são bem-vindas! Para contribuir, siga os passos:
1. Fork o repositório.
2. Crie uma nova branch:
```bash
git checkout -b minha-feature
```
3. Faça as alterações e commit:
```bash
git commit -m "Minha nova feature"
```
4. Envie para o repositório remoto:
```bash
git push origin minha-feature
```
5. Crie um Pull Request.

Licença
Gerenciamento de Loja de Produtos e Aplicação Mobile
Este projeto não possui um licenciamento específico. Para mais informações sobre os termos de
uso e distribuição do software, por favor, entre em contato com o autor.
