# Dockerfile

# Define a imagem base (Node.js e Swift)
FROM swift:5.5 as swift-builder

# Instalação de dependências para compilação Swift (se necessário)
RUN apt-get update && apt-get install -y \
    # pacotes necessários para compilação Swift \
    && rm -rf /var/lib/apt/lists/*

# Definir o diretório de trabalho
WORKDIR /app

# Copiar o código fonte do backend (Node.js)
COPY backend/package*.json ./
RUN npm install

# Copiar o código fonte do frontend (Swift)
COPY frontend ./frontend

# Compilar o frontend Swift (ajuste conforme necessário)
RUN cd frontend && \
    # Comandos para compilar o frontend Swift, por exemplo:
    # swift build --configuration release

# Copiar o resto do código fonte do backend
COPY backend .


# Comando para iniciar o servidor Node.js
CMD npm start