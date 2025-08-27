# 🎵 Jonatha e Cristiano - Projeto Landing Page

Projeto completo da landing page da dupla sertaneja Jonatha e Cristiano, composto por uma aplicação frontend em Next.js e uma API backend em Node.js.

## 📁 Estrutura do Projeto

```
jec/
├── api-lp-main/          # API Backend (Node.js + Fastify + Prisma)
├── lp-dupla-main/        # Frontend (Next.js + React + Tailwind)
└── README.md             # Este arquivo
```

## 🚀 Tecnologias Utilizadas

### Frontend (lp-dupla-main)
- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset tipado do JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de esquemas
- **Lucide React** - Ícones modernos

### Backend (api-lp-main)
- **Node.js** - Ambiente de execução JavaScript
- **TypeScript** - Superset tipado do JavaScript
- **Fastify** - Framework web rápido e eficiente
- **Prisma** - ORM moderno para Node.js
- **PostgreSQL** - Banco de dados relacional
- **BCrypt** - Criptografia de senhas
- **Zod** - Validação de dados

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- Yarn ou npm
- PostgreSQL (para a API)

## ⚙️ Configuração e Instalação

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd jec
```

### 2. Configuração do Backend (API)

```bash
cd api-lp-main

# Instalar dependências
yarn install

# Configurar variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas configurações do PostgreSQL

# Configurar banco de dados
yarn db:generate
yarn db:push
yarn db:seed

# Iniciar servidor de desenvolvimento
yarn dev
```

A API estará disponível em: `http://localhost:3000`

**Credenciais padrão da API:**
- Email: `admin@api-lp.com`
- Senha: `admin123`

### 3. Configuração do Frontend

```bash
cd ../lp-dupla-main

# Instalar dependências
yarn install

# Iniciar servidor de desenvolvimento
yarn dev
```

O frontend estará disponível em: `http://localhost:3001`

**Credenciais padrão do admin frontend:**
- Usuário: `jc2025`
- Senha: `jc2025`

## 🖥️ Executando o Projeto Completo

### Desenvolvimento

1. **Terminal 1 - API Backend:**
```bash
cd api-lp-main
yarn dev
```

2. **Terminal 2 - Frontend:**
```bash
cd lp-dupla-main
yarn dev
```

### Produção

1. **Build da API:**
```bash
cd api-lp-main
yarn build
yarn start
```

2. **Build do Frontend:**
```bash
cd lp-dupla-main
yarn build
yarn start
```

## 📡 Funcionalidades

### Frontend
- 🎨 Landing page responsiva da dupla Jonatha e Cristiano
- 📱 Design mobile-first com Tailwind CSS
- 🔐 Painel administrativo para gerenciamento
- 📋 Formulários de contato e administração
- 🎵 Integração com plataformas de música
- 📅 Seção de agenda de shows

### Backend (API)
- 🔐 Sistema de autenticação de administradores
- 👥 Gerenciamento de usuários admin
- 📅 CRUD de datas e eventos
- 🎥 Gerenciamento de links de vídeos
- 📊 Banco de dados PostgreSQL com Prisma
- 🛡️ Validação de dados com Zod
- 🔒 Criptografia de senhas com BCrypt

## 📡 Endpoints da API

### Administração
- `POST /api/admin/login` - Login do administrador
- `GET /api/admin` - Listar administradores
- `POST /api/admin` - Criar novo administrador
- `PUT /api/admin/:id` - Atualizar administrador
- `DELETE /api/admin/:id` - Deletar administrador

### Dados/Eventos
- `GET /api/data` - Listar eventos/datas
- `POST /api/data` - Criar novo evento
- `PUT /api/data/:id` - Atualizar evento
- `DELETE /api/data/:id` - Deletar evento

### Links de Vídeo
- `GET /api/link` - Obter link do vídeo
- `PUT /api/link` - Atualizar link do vídeo

## 🔐 Acesso Administrativo

### Frontend Admin
- **URL:** `http://localhost:3001/admin`
- **Usuário:** `jc2025`
- **Senha:** `jc2025`

### API Admin
- **Endpoint:** `POST http://localhost:3000/api/admin/login`
- **Email:** `admin@api-lp.com`
- **Senha:** `admin123`

## 📂 Estrutura de Arquivos

### Frontend (lp-dupla-main)
```
src/
├── app/                  # App Router do Next.js
│   ├── admin/           # Páginas administrativas
│   └── page.tsx         # Página principal
├── components/          # Componentes React reutilizáveis
└── hooks/              # Custom hooks
```

### Backend (api-lp-main)
```
src/
├── http/               # Configuração do servidor
├── prisma/             # Cliente Prisma
└── routes/             # Rotas da API
    ├── adminroutes.ts  # Rotas de administração
    ├── datasroutes.ts  # Rotas de dados/eventos
    └── linkroutes.ts   # Rotas de links
```

## 🛠️ Scripts Disponíveis

### Frontend
- `yarn dev` - Servidor de desenvolvimento
- `yarn build` - Build para produção
- `yarn start` - Servidor de produção
- `yarn lint` - Verificação de código

### Backend
- `yarn dev` - Servidor de desenvolvimento
- `yarn build` - Build para produção
- `yarn start` - Servidor de produção
- `yarn db:generate` - Gerar cliente Prisma
- `yarn db:push` - Aplicar schema ao banco
- `yarn db:migrate` - Executar migrações
- `yarn db:seed` - Executar seeder
- `yarn db:studio` - Abrir Prisma Studio

## 🚀 Deploy

### Frontend (Vercel)
1. Conecte o repositório ao Vercel
2. Configure as variáveis de ambiente necessárias
3. Deploy automático a cada push

### Backend (Railway/Heroku)
1. Configure as variáveis de ambiente
2. Configure o banco PostgreSQL
3. Execute as migrações: `yarn db:push`
4. Execute o seeder: `yarn db:seed`

## ⚠️ Segurança

**IMPORTANTE:** Antes de colocar em produção:

1. **Altere todas as credenciais padrão**
2. **Configure variáveis de ambiente adequadas**
3. **Use HTTPS em produção**
4. **Configure backup do banco de dados**
5. **Implemente rate limiting se necessário**

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para suporte técnico ou dúvidas sobre o projeto, entre em contato com a equipe de desenvolvimento.

---

**Desenvolvido para a dupla sertaneja Jonatha e Cristiano** 🎵

**Última atualização:** Janeiro 2025