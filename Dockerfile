# Usa a imagem oficial do Node.js
FROM node:18-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos para dentro do container
COPY . .

# Instala as dependências
RUN npm install

# Expõe a porta 3000 (ou a porta que sua app usa)
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["node", "index.js"]