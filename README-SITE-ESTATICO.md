# Site Estático - Jonatha e Cristiano

Este é o site estático gerado a partir do projeto Next.js.

## Como usar

### Opção 1: Usando o script automático (Windows)
1. Execute o arquivo `start-server.bat`
2. Abra o navegador e acesse `http://localhost:8000`

### Opção 2: Usando Python manualmente
1. Abra o terminal/prompt de comando na pasta do projeto
2. Execute: `python -m http.server 8000`
3. Abra o navegador e acesse `http://localhost:8000`

### Opção 3: Usando Node.js
1. Instale o http-server globalmente: `npm install -g http-server`
2. Execute: `http-server -p 8000`
3. Abra o navegador e acesse `http://localhost:8000`

## Importante

⚠️ **NÃO** abra o arquivo `index.html` diretamente no navegador (protocolo file://)
✅ **SEMPRE** use um servidor HTTP local para servir os arquivos

## Estrutura de arquivos

- `index.html` - Página principal
- `_next/` - Recursos JavaScript e CSS do Next.js
- `*.png`, `*.jpg`, `*.svg` - Imagens e ícones
- `new/` - Imagens da seção nova
- `tamble/` - Imagens da galeria

## Deploy

Para fazer deploy em produção, faça upload de todos os arquivos para seu servidor web ou serviço de hospedagem estática (Netlify, Vercel, GitHub Pages, etc.).
