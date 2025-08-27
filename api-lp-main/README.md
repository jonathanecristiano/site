# API LP - Landing Page API

Uma API RESTful construída com Node.js, TypeScript, Fastify e Prisma para gerenciar dados de uma landing page.

## 🚀 Tecnologias

- **Node.js** - Ambiente de execução JavaScript
- **TypeScript** - Superset tipado do JavaScript
- **Fastify** - Framework web rápido e eficiente
- **Prisma** - ORM moderno para Node.js e TypeScript
- **PostgreSQL** - Banco de dados relacional
- **Yarn** - Gerenciador de pacotes

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- Yarn
- PostgreSQL (local ou remoto)

## ⚙️ Configuração

### 1. Instalação das dependências

```bash
yarn install
```

### 2. Configuração do banco de dados

1. Copie o arquivo de exemplo das variáveis de ambiente:
```bash
cp .env.example .env
```

2. Configure sua string de conexão do PostgreSQL no arquivo `.env`:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/api_lp_db"
NODE_ENV=development
PORT=3000
```

### 3. Configuração do Prisma

Gere o cliente do Prisma:
```bash
yarn db:generate
```

Execute as migrações do banco de dados:
```bash
yarn db:push
```

Execute o seeder para criar admin padrão e dados de exemplo:
```bash
yarn db:seed
```

**Credenciais do Admin Padrão:**
- Email: `admin@api-lp.com`
- Senha: `admin123` (⚠️ **Altere em produção!**)

## 🚦 Scripts Disponíveis

- **`yarn dev`** - Inicia o servidor em modo de desenvolvimento com hot reload
- **`yarn build`** - Compila o projeto para produção
- **`yarn start`** - Inicia o servidor compilado
- **`yarn db:generate`** - Gera o cliente Prisma
- **`yarn db:push`** - Aplica o schema ao banco de dados
- **`yarn db:migrate`** - Executa migrações do banco
- **`yarn db:reset`** - Reseta o banco de dados
- **`yarn db:studio`** - Abre o Prisma Studio (interface visual do banco)
- **`yarn db:seed`** - Executa o seeder (cria admin padrão e dados de exemplo)

## 🖥️ Executando o projeto

### Desenvolvimento
```bash
yarn dev
```

O servidor estará disponível em: `http://localhost:3000`

### Produção
```bash
yarn build
yarn start
```

## 📡 Endpoints da API

### Health Check
- **GET** `/health` - Verifica se a API está funcionando

### 🔐 Administração
- **POST** `/api/admin/login` - Login do administrador
- **GET** `/api/admin` - Lista todos os admins
- **GET** `/api/admin/:id` - Busca admin específico
- **POST** `/api/admin` - Cria novo admin
- **PUT** `/api/admin/:id` - Atualiza admin
- **DELETE** `/api/admin/:id` - Remove admin

### Datas (Dados de eventos)
- **POST** `/api/data` - Cria uma nova data/evento
- **GET** `/api/data` - Lista todas as datas/eventos
- **GET** `/api/data/:id` - Busca uma data/evento específica
- **PUT** `/api/data/:id` - Atualiza uma data/evento
- **DELETE** `/api/data/:id` - Remove uma data/evento

### Video Links
- **POST** `/api/link` - Cria/atualiza o link do vídeo
- **GET** `/api/link` - Obtém o link do vídeo atual
- **PUT** `/api/link` - Atualiza o link do vídeo

## 📊 Estrutura do Banco de Dados

### Tabela `admins`
```sql
- id: Int (Primary Key, Auto Increment)
- email: String (Unique)
- password: String (BCrypt Hash)
- name: String
- createdAt: DateTime
- updatedAt: DateTime
```

### Tabela `datas`
```sql
- id: Int (Primary Key, Auto Increment)
- day: String
- month: String
- location: String
- city: String
- linkbuy: String (Optional)
```

### Tabela `VideoLink`
```sql
- id: Int (Primary Key, Auto Increment)
- link: String
```

## 🔧 Estrutura do Projeto

```
├── prisma/
│   ├── schema.prisma          # Schema do banco de dados
│   ├── seed.ts                # Seeder para dados iniciais
│   └── migrations/            # Migrações do banco
├── src/
│   ├── http/
│   │   └── server.ts          # Configuração do servidor
│   ├── prisma/
│   │   └── index.ts           # Cliente Prisma
│   └── routes/
│       ├── adminroutes.ts     # Rotas para administração
│       ├── datasroutes.ts     # Rotas para dados/eventos
│       └── linkroutes.ts      # Rotas para links de vídeo
├── package.json
├── tsconfig.json              # Configuração TypeScript
├── tsup.config.ts             # Configuração do build
└── .env                       # Variáveis de ambiente
```

## 📝 Exemplos de Uso

### Login do Admin
```bash
# PowerShell (Windows)
Invoke-WebRequest -Uri "http://localhost:3000/api/admin/login" -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"email":"admin@api-lp.com","password":"admin123"}'

# cURL (Linux/Mac)
curl -X POST http://localhost:3000/api/admin/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@api-lp.com","password":"admin123"}'
```

### Criar um novo evento
```bash
# PowerShell (Windows)
Invoke-WebRequest -Uri "http://localhost:3000/api/data" -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"day":"15","month":"Janeiro","location":"Centro de Convenções","city":"São Paulo","linkbuy":"https://example.com/buy"}'

# cURL (Linux/Mac)
curl -X POST http://localhost:3000/api/data \
  -H "Content-Type: application/json" \
  -d '{"day":"15","month":"Janeiro","location":"Centro de Convenções","city":"São Paulo","linkbuy":"https://example.com/buy"}'
```

### Atualizar link do vídeo
```bash
# PowerShell (Windows)
Invoke-WebRequest -Uri "http://localhost:3000/api/link" -Method PUT -Headers @{"Content-Type"="application/json"} -Body '{"link":"https://youtube.com/watch?v=example"}'

# cURL (Linux/Mac)
curl -X PUT http://localhost:3000/api/link \
  -H "Content-Type: application/json" \
  -d '{"link":"https://youtube.com/watch?v=example"}'
```

## 🐛 Solução de Problemas

### Erro: "@prisma/client did not initialize yet"
Execute: `yarn db:generate`

### Erro de conexão com banco de dados
Verifique se:
1. PostgreSQL está rodando
2. String de conexão no `.env` está correta
3. Banco de dados existe

### Porta já em uso
Altere a variável `PORT` no arquivo `.env`

### Problemas com seeder
Se o seeder não funcionar:
1. Verifique se o banco está configurado: `yarn db:push`
2. Execute: `yarn db:seed`

## 🚀 Próximos Passos Recomendados

1. **Configure seu banco PostgreSQL** e atualize a `DATABASE_URL` no `.env`
2. **Execute as migrações**: `yarn db:push`
3. **Execute o seeder**: `yarn db:seed`
4. **Faça login com as credenciais padrão**: `admin@api-lp.com` / `admin123`
5. **Altere a senha do admin** em produção
6. **Teste as APIs** usando os endpoints documentados
7. **Configure o ambiente de produção** com variáveis adequadas

📚 **Documentação Adicional:**
- Para detalhes sobre o sistema de administração, consulte [`ADMIN.md`](./ADMIN.md)

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC.
